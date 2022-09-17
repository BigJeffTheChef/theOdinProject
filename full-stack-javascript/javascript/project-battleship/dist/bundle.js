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
/* harmony export */   "placeShipsForComputer": () => (/* binding */ placeShipsForComputer),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _GameData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameData.js */ "./src/obj/GameData.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.js */ "./src/obj/Player.js");
/* harmony import */ var _web_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web/ui.js */ "./src/web/ui.js");
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Gameboard.js */ "./src/obj/Gameboard.js");


// eslint-disable-next-line import/no-cycle



let gameData = null;
let gameActive = false;

async function startGame(b1, b2) {
  // set game data
  gameActive = true;
  gameData = new _GameData_js__WEBPACK_IMPORTED_MODULE_0__["default"](
    new _Player_js__WEBPACK_IMPORTED_MODULE_1__["default"](true),
    new _Player_js__WEBPACK_IMPORTED_MODULE_1__["default"](false),
    b1,
    b2,
  );
  (0,_web_ui_js__WEBPACK_IMPORTED_MODULE_2__.renderBoards)(gameData);
}

/**
 * This is an event handler that is activated each time a valid board square is clicked.
 * @param {number} x x co-ordinate of gameboard (outer array index)
 * @param {number} y y co-ordinate              (inner array index)
 * @param {number} playerIndex the index of the current player for use in gameData.players[index].
 */
function onSquareClick(x, y, playerIndex) {
  if (!gameActive || gameData === null || gameData.enemyPlayer !== playerIndex) return;
  gameData.players[playerIndex].board.receiveAttack(x, y);

  // check for game win

  if (gameData.players[playerIndex].board.allSunk()) {
    gameActive = false;
    (0,_web_ui_js__WEBPACK_IMPORTED_MODULE_2__.declareWinner)(`Gameover! ${playerIndex === 0 ? 'Computer' : 'Human'} player wins!`);
  }

  // change player and render new move

  gameData.changePlayer();
  (0,_web_ui_js__WEBPACK_IMPORTED_MODULE_2__.renderBoards)(gameData);

  // if new player is a computer player then make select it's move

  if (!gameData.isCurrentPlayerHuman()) {
    setTimeout(() => {
      const attackCoords = gameData.players[gameData.currentPlayer].player.attack();
      onSquareClick(attackCoords.x, attackCoords.y, gameData.enemyPlayer);
    }, 250);
  }
}

/**
 * Creates a Gameboard and randomly places ships onto it, for the computer player. Returns the Gameboard with the placed ships
 * @param {String[]} ships names of all ships to be placed
 */
function placeShipsForComputer(ships) {
  const board = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
  for (const ship of ships) {
    let complete = false;
    while (!complete) {
      complete = board.placeShip(
        ship,
        parseInt(Math.random() * 10, 10),
        parseInt(Math.random() * 10, 10),
        Math.random() < 0.5,
      );
    }
  }
  return board;
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
/* harmony export */   "renderBoards": () => (/* binding */ renderBoards),
/* harmony export */   "renderNew": () => (/* binding */ renderNew)
/* harmony export */ });
/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings.json */ "./src/settings.json");
/* harmony import */ var _obj_Game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../obj/Game.js */ "./src/obj/Game.js");
/* harmony import */ var _obj_Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../obj/Gameboard */ "./src/obj/Gameboard.js");

// eslint-disable-next-line import/no-cycle



const BOARD_SIZE = _settings_json__WEBPACK_IMPORTED_MODULE_0__["gameboard-size"];
const SHIPS = _settings_json__WEBPACK_IMPORTED_MODULE_0__.ships;
const TEST_MODE = _settings_json__WEBPACK_IMPORTED_MODULE_0__["test-mode"];
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
  const constructionBoard = new _obj_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]();

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
    const vertical = directionButton.textContent === 'vertical';
    directionButton.textContent = vertical ? 'horizontal' : 'vertical';
  });
  shipChooser.appendChild(directionButton);

  // register event listeners

  buttonPlay.addEventListener('click', () => {
    containerShipPlacer.classList.remove('hidden');
    containerIntro.classList.add('hidden');
  });

  for (const draggable of document.querySelectorAll('.ship-draggable')) {
    draggable.addEventListener('dragstart', e => {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', draggable.dataset.shipName);
    });
  }

  for (const droppable of document.querySelectorAll('.board.square')) {
    droppable.addEventListener('dragover', e => {
      e.preventDefault();
    });
    // eslint-disable-next-line no-loop-func
    droppable.addEventListener('drop', e => {
      const dataShipName = e.dataTransfer.getData('text/plain'); // "patrol boat" etc
      e.dataTransfer.dropEffect = 'move';
      e.preventDefault();
      const draggingShip = document.querySelector(`.ship-draggable[data-ship-name="${dataShipName}"]`);
      const accepted = constructionBoard.placeShip(
        draggingShip.dataset.shipName,
        parseInt(e.target.dataset.col, 10),
        parseInt(e.target.dataset.row, 10),
        document.querySelector('.direction-button').textContent === 'vertical',
      );
      if (accepted) {
        placedShips++;
        renderNew(document.querySelector('.placing-board>.board'), constructionBoard);
        document.querySelector('.ship-chooser').removeChild(draggingShip);
        if (placedShips === SHIPS.length) {
          placedShips = 0;
          const b = (0,_obj_Game_js__WEBPACK_IMPORTED_MODULE_1__.placeShipsForComputer)(SHIPS.map(shipDetails => shipDetails.name));
          prepareUIForGame();
          (0,_obj_Game_js__WEBPACK_IMPORTED_MODULE_1__.startGame)(constructionBoard, b);
        }
      }
    });
  }

  // if test mode is true, then skip play button, and ship placement screen, and just start game with randomly placed ships

  if (TEST_MODE) {
    buttonPlay.click();
    containerShipPlacer.classList.add('hidden');
    containerIntro.classList.add('hidden');
    prepareUIForGame();
    (0,_obj_Game_js__WEBPACK_IMPORTED_MODULE_1__.startGame)(
      (0,_obj_Game_js__WEBPACK_IMPORTED_MODULE_1__.placeShipsForComputer)(SHIPS.map(e => e.name)),
      (0,_obj_Game_js__WEBPACK_IMPORTED_MODULE_1__.placeShipsForComputer)(SHIPS.map(e => e.name)),
    );
  }
}

/**
 * Prepares the UI for a new game.
 * The ship-placer board  is removed, and the ship placer container div is hidden.
 * The real board container and game info container are then shown.
 */
function prepareUIForGame() {
  // Close ship placer (and also remove placing board - regenerate if needed)

  const containerShipPlacer = document.querySelector('.container-ship-placer');
  containerShipPlacer.removeChild(document.querySelector('.placing-board'));
  containerShipPlacer.classList.add('hidden');

  // show container board and container game info

  const containerBoards = document.querySelector('.container-board');
  containerBoards.classList.remove('hidden');

  const containerGameInfo = document.querySelector('.container-game-info');
  containerGameInfo.classList.remove('hidden');

  // append new empty board to container boards

  containerBoards.appendChild(buildBoardElement(BOARD_SIZE, 0));
  containerBoards.appendChild(buildBoardElement(BOARD_SIZE, 1));
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
      // eslint-disable-next-line no-unused-vars
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
 * @param {HTMLDivElement} uiElement the board div
 * @param {Gameboard} board the Gameboard object underpinning the uiElement
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
  // const uib1 = document.querySelector('player1');
  // const uib2 = document.querySelector('player2');

  // for (let row = 0; row < gameData.p1.board.size; row++) {
  //   for (let col = 0; col < gameData.p1.board.size; col++) {
  //     processBoardSquare(
  //       document.querySelector('#player1').childNodes[row].childNodes[col],
  //       gameData.p1.board.board[row][col],
  //     );
  //     processBoardSquare(
  //       document.querySelector('#player2').childNodes[row].childNodes[col],
  //       gameData.p2.board.board[row][col],
  //     );
  //   }
  // }
  // document.querySelector('.current-player>span').textContent = gameData.currentPlayer + 1;
  renderNew(document.querySelector('#player1'), gameData.p1.board);
  renderNew(document.querySelector('#player2'), gameData.p2.board);
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

module.exports = JSON.parse('{"gameboard-size":10,"rules":{"base ruleset":"hasbro rules","url":"https://web.archive.org/web/20190813104535/https://www.hasbro.com/common/instruct/BattleShip_(2002).PDF","modified":true},"ships":[{"name":"patrol boat","numberOf":5,"size":2},{"name":"submarine","numberOf":4,"size":3},{"name":"destroyer","numberOf":3,"size":3},{"name":"battleship","numberOf":2,"size":4},{"name":"carrier","numberOf":1,"size":5}],"test-mode":true}');

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xQQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNXO0FBQ2pDO0FBQ0Esa0RBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvd2ViL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvd2ViL3N0eWxlcy5jc3M/NDM0MCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9vYmovQm9hcmRQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL29iai9Db29yZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL0dhbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL29iai9HYW1lRGF0YS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL1BsYXllci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL1NoaXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3dlYi91aS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvd2ViL0NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLXNxdWFyZS1kaW1lbnNpb246IDQ1cHg7XFxyXFxuICAtLWJvcmRlci1jb2xvcjogcmdiKDE2MCwgMTUxLCAyNDcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCb2FyZCAqL1xcclxcblxcclxcbi5jb250YWluZXItYm9hcmQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmci8gcmVwZWF0KDIsIDFmcik7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVldmlvbGV0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXNoaXAtcGxhY2VyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1zaGlwLXBsYWNlcj5kaXZ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQ+LnJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIC5zcXVhcmUge1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXIxIC5ib2FyZC5zcXVhcmUuc2hpcCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQuc3F1YXJlLnN0cnVjayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAxODIsIDE4Mik7XFxyXFxuICAvKiBib3JkZXI6IDNweCBzb2xpZCBibGFjazsgKi9cXHJcXG59XFxyXFxuI3BsYXllcjEgLmJvYXJkLnNxdWFyZS5zdHJ1Y2suc2hpcCxcXHJcXG4jcGxheWVyMiAuYm9hcmQuc3F1YXJlLnN0cnVjay5zaGlwIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6Y3JpbXNvbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY2hvb3NlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMHB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jaG9vc2VyLXJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtZHJhZ2dhYmxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ29sZGVucm9kO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1kcmFnZ2FibGU+ZGl2e1xcclxcbiAgd2lkdGg6IHZhcigtLXNxdWFyZS1kaW1lbnNpb24pO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdvbGRlbnJvZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtaG92ZXJlZCB7XFxyXFxuICBib3JkZXI6IDFweCBkYXNoZWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udmVydGljYWwge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvd2ViL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsa0NBQWtDO0FBQ3BDOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixtQkFBbUI7O0VBRW5CLFdBQVc7O0VBRVgsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsNkJBQTZCO0FBQy9CO0FBQ0E7O0VBRUUsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLXNxdWFyZS1kaW1lbnNpb246IDQ1cHg7XFxyXFxuICAtLWJvcmRlci1jb2xvcjogcmdiKDE2MCwgMTUxLCAyNDcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCb2FyZCAqL1xcclxcblxcclxcbi5jb250YWluZXItYm9hcmQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmci8gcmVwZWF0KDIsIDFmcik7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVldmlvbGV0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXNoaXAtcGxhY2VyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1zaGlwLXBsYWNlcj5kaXZ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQ+LnJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIC5zcXVhcmUge1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXIxIC5ib2FyZC5zcXVhcmUuc2hpcCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQuc3F1YXJlLnN0cnVjayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAxODIsIDE4Mik7XFxyXFxuICAvKiBib3JkZXI6IDNweCBzb2xpZCBibGFjazsgKi9cXHJcXG59XFxyXFxuI3BsYXllcjEgLmJvYXJkLnNxdWFyZS5zdHJ1Y2suc2hpcCxcXHJcXG4jcGxheWVyMiAuYm9hcmQuc3F1YXJlLnN0cnVjay5zaGlwIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6Y3JpbXNvbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY2hvb3NlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMHB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jaG9vc2VyLXJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtZHJhZ2dhYmxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ29sZGVucm9kO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1kcmFnZ2FibGU+ZGl2e1xcclxcbiAgd2lkdGg6IHZhcigtLXNxdWFyZS1kaW1lbnNpb24pO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdvbGRlbnJvZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtaG92ZXJlZCB7XFxyXFxuICBib3JkZXI6IDFweCBkYXNoZWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udmVydGljYWwge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyoqXHJcbiAqIEFuIG9iamVjdCB0aGF0IHJlY29yZHMgZGF0YSByZXF1aXJlZCBmb3IgcGxhY2VtZW50IG9udG8gYSBzcXVhcmUgb2YgdGhlIEdhbWVib2FyZCBvYmplY3RzIGJvYXJkIHByb3BlcnR5XHJcbiAqIEBwYXJhbSB7U2hpcH0gc2hpcFxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkUGxhY2VtZW50KHNoaXAsIGluZGV4KSB7XHJcbiAgdGhpcy5zaGlwID0gc2hpcDtcclxuICB0aGlzLnNoaXBIdWxsSW5kZXggPSBpbmRleDtcclxufVxyXG5cclxuQm9hcmRQbGFjZW1lbnQucHJvdG90eXBlLmlzU3RydWNrID0gZnVuY3Rpb24gaXNTdHJ1Y2soKSB7XHJcbiAgcmV0dXJuIHRoaXMuc2hpcC5odWxsW3RoaXMuc2hpcEh1bGxJbmRleF07XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGUgYSBjb29yZCBvYmplY3QgdGhhdCBob2xkcyB4IGFuZCB5IG51bWJlcmljIHZhbHVlcyBmb3IgYSBib2FyZCBjby1vcmRpbmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0geCB4IGNvLW9yZGluYXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IHkgY28tb3JkaW5hdGVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvb3JkKHgsIHkpIHtcclxuICB0aGlzLnggPSBwYXJzZUludCh4LCAxMCk7XHJcbiAgdGhpcy55ID0gcGFyc2VJbnQoeSwgMTApO1xyXG59XHJcbiIsImltcG9ydCBHYW1lRGF0YSBmcm9tICcuL0dhbWVEYXRhLmpzJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHsgcmVuZGVyQm9hcmRzLCBkZWNsYXJlV2lubmVyIH0gZnJvbSAnLi4vd2ViL3VpLmpzJztcclxuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL0dhbWVib2FyZC5qcyc7XHJcblxyXG5sZXQgZ2FtZURhdGEgPSBudWxsO1xyXG5sZXQgZ2FtZUFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0R2FtZShiMSwgYjIpIHtcclxuICAvLyBzZXQgZ2FtZSBkYXRhXHJcbiAgZ2FtZUFjdGl2ZSA9IHRydWU7XHJcbiAgZ2FtZURhdGEgPSBuZXcgR2FtZURhdGEoXHJcbiAgICBuZXcgUGxheWVyKHRydWUpLFxyXG4gICAgbmV3IFBsYXllcihmYWxzZSksXHJcbiAgICBiMSxcclxuICAgIGIyLFxyXG4gICk7XHJcbiAgcmVuZGVyQm9hcmRzKGdhbWVEYXRhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgYW4gZXZlbnQgaGFuZGxlciB0aGF0IGlzIGFjdGl2YXRlZCBlYWNoIHRpbWUgYSB2YWxpZCBib2FyZCBzcXVhcmUgaXMgY2xpY2tlZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IHggeCBjby1vcmRpbmF0ZSBvZiBnYW1lYm9hcmQgKG91dGVyIGFycmF5IGluZGV4KVxyXG4gKiBAcGFyYW0ge251bWJlcn0geSB5IGNvLW9yZGluYXRlICAgICAgICAgICAgICAoaW5uZXIgYXJyYXkgaW5kZXgpXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwbGF5ZXJJbmRleCB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgcGxheWVyIGZvciB1c2UgaW4gZ2FtZURhdGEucGxheWVyc1tpbmRleF0uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb25TcXVhcmVDbGljayh4LCB5LCBwbGF5ZXJJbmRleCkge1xyXG4gIGlmICghZ2FtZUFjdGl2ZSB8fCBnYW1lRGF0YSA9PT0gbnVsbCB8fCBnYW1lRGF0YS5lbmVteVBsYXllciAhPT0gcGxheWVySW5kZXgpIHJldHVybjtcclxuICBnYW1lRGF0YS5wbGF5ZXJzW3BsYXllckluZGV4XS5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xyXG5cclxuICAvLyBjaGVjayBmb3IgZ2FtZSB3aW5cclxuXHJcbiAgaWYgKGdhbWVEYXRhLnBsYXllcnNbcGxheWVySW5kZXhdLmJvYXJkLmFsbFN1bmsoKSkge1xyXG4gICAgZ2FtZUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgZGVjbGFyZVdpbm5lcihgR2FtZW92ZXIhICR7cGxheWVySW5kZXggPT09IDAgPyAnQ29tcHV0ZXInIDogJ0h1bWFuJ30gcGxheWVyIHdpbnMhYCk7XHJcbiAgfVxyXG5cclxuICAvLyBjaGFuZ2UgcGxheWVyIGFuZCByZW5kZXIgbmV3IG1vdmVcclxuXHJcbiAgZ2FtZURhdGEuY2hhbmdlUGxheWVyKCk7XHJcbiAgcmVuZGVyQm9hcmRzKGdhbWVEYXRhKTtcclxuXHJcbiAgLy8gaWYgbmV3IHBsYXllciBpcyBhIGNvbXB1dGVyIHBsYXllciB0aGVuIG1ha2Ugc2VsZWN0IGl0J3MgbW92ZVxyXG5cclxuICBpZiAoIWdhbWVEYXRhLmlzQ3VycmVudFBsYXllckh1bWFuKCkpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBhdHRhY2tDb29yZHMgPSBnYW1lRGF0YS5wbGF5ZXJzW2dhbWVEYXRhLmN1cnJlbnRQbGF5ZXJdLnBsYXllci5hdHRhY2soKTtcclxuICAgICAgb25TcXVhcmVDbGljayhhdHRhY2tDb29yZHMueCwgYXR0YWNrQ29vcmRzLnksIGdhbWVEYXRhLmVuZW15UGxheWVyKTtcclxuICAgIH0sIDI1MCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIEdhbWVib2FyZCBhbmQgcmFuZG9tbHkgcGxhY2VzIHNoaXBzIG9udG8gaXQsIGZvciB0aGUgY29tcHV0ZXIgcGxheWVyLiBSZXR1cm5zIHRoZSBHYW1lYm9hcmQgd2l0aCB0aGUgcGxhY2VkIHNoaXBzXHJcbiAqIEBwYXJhbSB7U3RyaW5nW119IHNoaXBzIG5hbWVzIG9mIGFsbCBzaGlwcyB0byBiZSBwbGFjZWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwbGFjZVNoaXBzRm9yQ29tcHV0ZXIoc2hpcHMpIHtcclxuICBjb25zdCBib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcclxuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcclxuICAgIGxldCBjb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgd2hpbGUgKCFjb21wbGV0ZSkge1xyXG4gICAgICBjb21wbGV0ZSA9IGJvYXJkLnBsYWNlU2hpcChcclxuICAgICAgICBzaGlwLFxyXG4gICAgICAgIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMCwgMTApLFxyXG4gICAgICAgIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMCwgMTApLFxyXG4gICAgICAgIE1hdGgucmFuZG9tKCkgPCAwLjUsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBib2FyZDtcclxufVxyXG4iLCIvKipcclxuICogSG9sZHMgZGF0YSBhYm91dCBhIGdhbWUuIFRoZXJlIGFyZSB0d28gcGxheWVycywgZWFjaCBob2xkaW5nIGRhdGEgb24gdGhlIHBsYXllciBpdHNlbGYsIGFuZCB0aGVpciBib2FyZC5cclxuICogQWRkaXRpb25hbCB0aGUgY3VycmVudCBwbGF5ZXIgYW5kIGVuZW15IHBsYXllcnMgYXJlIHN0b3JlZCBoZXJlLlxyXG4gKiBAcGFyYW0geyp9IHAxIHBsYXllciAxJ3MgcGxheWVyIG9iamVjdFxyXG4gKiBAcGFyYW0geyp9IHAyIHBsYXllciAyJ3MgcGxheWVyIG9iamVjdFxyXG4gKiBAcGFyYW0geyp9IGIxIHBsYXllciAxJ3MgYm9hcmQgb2JqZWN0XHJcbiAqIEBwYXJhbSB7Kn0gYjIgcGxheWVyIDIncyBib2FyZCBvYmplY3RcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVEYXRhKHAxLCBwMiwgYjEsIGIyKSB7XHJcbiAgdGhpcy5wMSA9IHsgcGxheWVyOiBwMSwgYm9hcmQ6IGIxIH07XHJcbiAgdGhpcy5wMiA9IHsgcGxheWVyOiBwMiwgYm9hcmQ6IGIyIH07XHJcbiAgdGhpcy5wbGF5ZXJzID0gW3RoaXMucDEsIHRoaXMucDJdO1xyXG4gIHRoaXMuY3VycmVudFBsYXllciA9IDA7XHJcbiAgdGhpcy5lbmVteVBsYXllciA9IDE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTd2FwcyBjdXJyZW50UGxheWVyIGFuZCBlbmVteVBsYXllciBvZiBnYW1lRGF0YVxyXG4gKi9cclxuR2FtZURhdGEucHJvdG90eXBlLmNoYW5nZVBsYXllciA9IGZ1bmN0aW9uIGNoYW5nZVBsYXllcigpIHtcclxuICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSAodGhpcy5jdXJyZW50UGxheWVyID09PSAwKSA/IDEgOiAwO1xyXG4gIHRoaXMuZW5lbXlQbGF5ZXIgPSAodGhpcy5lbmVteVBsYXllciA9PT0gMCkgPyAxIDogMDtcclxufTtcclxuXHJcbkdhbWVEYXRhLnByb3RvdHlwZS5pc0N1cnJlbnRQbGF5ZXJIdW1hbiA9IGZ1bmN0aW9uIGN1cnJlbnRQbGF5ZXJIdW1hbigpIHtcclxuICByZXR1cm4gdGhpcy5wbGF5ZXJzW3RoaXMuY3VycmVudFBsYXllcl0ucGxheWVyLmh1bWFuO1xyXG59O1xyXG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAuanMnO1xyXG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi4vc2V0dGluZ3MuanNvbic7XHJcbmltcG9ydCBCb2FyZFBsYWNlbWVudCBmcm9tICcuL0JvYXJkUGxhY2VtZW50LmpzJztcclxuaW1wb3J0IENvb3JkIGZyb20gJy4vQ29vcmQuanMnO1xyXG5cclxuLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDT05TVEFOVFNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmNvbnN0IEJPQVJEX1NJWkUgPSBzZXR0aW5nc1snZ2FtZWJvYXJkLXNpemUnXTtcclxuXHJcbi8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ09OU1RSVUNUT1JTXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgR2FtZWJvYXJkIG9iamVjdFxyXG4gKiBAcGFyYW0ge251bWJlciB8IHVuZGVmaW5lZH0gc2l6ZSBkZWZhdWx0cyB0byAxMCBidXQgY2FuIGJlIHNldCBtYW51YWxseVxyXG4gKi9cclxuZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xyXG4gIHRoaXMuc2l6ZSA9IEJPQVJEX1NJWkU7XHJcbiAgdGhpcy5ib2FyZCA9IG5ldyBBcnJheSh0aGlzLnNpemUpLmZpbGwobnVsbCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB0aGlzLmJvYXJkW2ldID0gbmV3IEFycmF5KHRoaXMuc2l6ZSkuZmlsbChudWxsKTtcclxuICB9XHJcbiAgdGhpcy5taXNzZXMgPSBbXTtcclxuICB0aGlzLnNoaXBzID0gW107XHJcbn1cclxuXHJcbi8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogTUVUSE9EU1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuLyoqXHJcbiAqIFBsYWNlIGEgc2hpcCBvbiB0aGUgYm9hcmRcclxuICogQHBhcmFtIHtTaGlwfSBzaGlwTmFtZSBhIFNoaXAgb2JqZWN0XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IHggY28tb3JkaW5hdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHkgeSBjby1vcmRpbmF0ZVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIGEgYm9vbGVhbiwgdHJ1ZSBpZiB2ZXJ0aWNhbCwgZmFsc2UgaWYgaG9yaXpvbnRhbFxyXG4gKi9cclxuR2FtZWJvYXJkLnByb3RvdHlwZS5wbGFjZVNoaXAgPSBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcE5hbWUsIHgsIHksIHZlcnRpY2FsKSB7XHJcbiAgY29uc3Qgc2hpcERldGFpbHMgPSBkZXRlcm1pbmVTaGlwRGV0YWlscyhzaGlwTmFtZSwgbmV3IENvb3JkKHgsIHkpLCB2ZXJ0aWNhbCk7XHJcbiAgaWYgKCFzaGlwRGV0YWlscykgcmV0dXJuIGZhbHNlO1xyXG4gIGlmICghZGV0ZXJtaW5lU2hpcE92ZXJsYXAuY2FsbCh0aGlzLCBzaGlwRGV0YWlscy5jb29yZHMpKSByZXR1cm4gZmFsc2U7XHJcbiAgbGV0IGluZGV4ID0gMDtcclxuICBzaGlwRGV0YWlscy5jb29yZHMuZm9yRWFjaChlID0+IHsgdGhpcy5ib2FyZFtlLnldW2UueF0gPSBuZXcgQm9hcmRQbGFjZW1lbnQoc2hpcERldGFpbHMuc2hpcCwgaW5kZXgrKyk7IH0pO1xyXG4gIHRoaXMuc2hpcHMucHVzaChzaGlwRGV0YWlscy5zaGlwKTtcclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZWNlaXZlIGFuIGF0dGFjay4gVGhlIGF0dGFjayB3aWxsIGVpdGhlciBoaXQgYSBzaGlwLCBpbiB3aGljaCBjYXNlIHRoYXQgc2hpcCByZWNvcmRzIGEgaGl0IGF0IHRoYXQgcG9zaXRpb247XHJcbiAqIG9yIHRoZSBhdHRhY2sgd2lsbCBtaXNzLCBpbiB3aGljaCBjYXNlIGl0IGlzIHJlY29yZGVkIGluIHRoZSBtaXNzZXMgYXJyYXlcclxuICogQHBhcmFtIHtudW1iZXJ9IHggeCBjby1vcmRpbmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0geSB5IGNvLW9yZGluYXRlXHJcbiAqIEByZXR1cm5zIHRydWUgaWYgYXR0YWNrIHdhcyBzdWNjZXNzZnVsLCBmYWxzZSBpZiBhdHRhY2sgd2FzIGEgbWlzc1xyXG4gKi9cclxuR2FtZWJvYXJkLnByb3RvdHlwZS5yZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayh4LCB5KSB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci10ZW1wbGF0ZVxyXG4gIC8vIGNvbnNvbGUubG9nKCd4IGFuZCB5OicgKyB4ICsgJyAnICsgeSk7XHJcbiAgLy8gY29uc29sZS5sb2codGhpcy5ib2FyZFt5XSk7XHJcbiAgY29uc3Qgc3F1YXJlID0gdGhpcy5ib2FyZFt5XVt4XTtcclxuICBpZiAodHlwZW9mIHNxdWFyZSA9PT0gJ3N0cmluZycpIHJldHVybiBmYWxzZTtcclxuICBpZiAoc3F1YXJlID09PSBudWxsKSB7XHJcbiAgICB0aGlzLm1pc3Nlcy5wdXNoKG5ldyBDb29yZCh4LCB5KSk7XHJcbiAgICB0aGlzLmJvYXJkW3ldW3hdID0gJ21pc3MnO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzcXVhcmUuc2hpcC5oaXQoc3F1YXJlLnNoaXBIdWxsSW5kZXgpO1xyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGFsbCBzaGlwcyBvbiB0aGUgYm9hcmQgYXJlIHN1bmtcclxuICogQHJldHVybnMgdHJ1ZSBpZiBhbGwgc3Vua3MgYXJlIHN1bmssIGFuZCBmYWxzZSBpZiB0aGV5IGFyZSBub3RcclxuICovXHJcbkdhbWVib2FyZC5wcm90b3R5cGUuYWxsU3VuayA9IGZ1bmN0aW9uIGFsbFN1bmsoKSB7XHJcbiAgcmV0dXJuIHRoaXMuc2hpcHMucmVkdWNlKChwcmV2LCBjdXIpID0+IHtcclxuICAgIGlmICghY3VyLmlzU3VuaygpKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gcHJldjtcclxuICB9LCB0cnVlKTtcclxufTtcclxuXHJcbi8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogSEVMUEVSIEZVTkNUSU9OU1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuLyoqXHJcbiAqICBEZXRlcm1pbmVzIGlmIGEgc2hpcHMgcGxhY2VtZW50IGlzIGFjY2VwdGFibGUgaW4gdGhhdCBpdCBkb2VzIG5vdCBvdmVybGFwIGFub3RoZXIgc2hpcC5cclxuICogQHBhcmFtIHtDb29yZFtdfSBzaGlwQ29vcmRzIHNoaXAgY29vcmRzIHRvIGNoZWNrXHJcbiAqIEB0aGlzIHtHYW1lYm9hcmR9IHRoaXMgZnVuY3Rpb24gbXVzdCBoYXZlIGl0cyBjb250ZXh0LyB0aGlzIHNldCB0byBhIGdhbWVib2FyZCBvYmplY3RcclxuICogQHJldHVybiBhIGJvb2xlYW4gcmVwcmVzZW50aW5nIGlmIHRoaXMgc2hpcCBwbGFjZW1lbnQgaXMgdmFsaWQsIGluIHRoYXQgaXQgZG9lcyBub3Qgb3ZlcmxhcCBhbm90aGVyIHNoaXBcclxuICovXHJcbmZ1bmN0aW9uIGRldGVybWluZVNoaXBPdmVybGFwKHNoaXBDb29yZHMpIHtcclxuICBsZXQgb3ZlcmxhcEZvdW5kID0gZmFsc2U7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAodGhpcy5ib2FyZFtzaGlwQ29vcmRzW2ldLnldW3NoaXBDb29yZHNbaV0ueF0gIT09IG51bGwpIHtcclxuICAgICAgb3ZlcmxhcEZvdW5kID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAhb3ZlcmxhcEZvdW5kO1xyXG59XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyBzaGlwIGRldGFpbHMuIFRoYXQgaXMsIHRoZSByZXNvbHZlcyB0aGUgc2hpcE5hbWUgdG8gYSBTaGlwIG9iamVjdCwgYW5kIGRldGVybWluZXMgYWxsIHRoZSBjb29yZGluYXRlcyBvbiB0aGUgYm9hcmQgdGhlIFNoaXBcclxuICogd291bGQgaW5oYWJpdCwgdGFraW5nIGludG8gY29uc2lkZXJhdGlvbiBpdHMgb3JpZW50YXRpb24gdmVydGljYWxseSBvciBob3Jpem9udGFsbHlcclxuICogQHBhcmFtIHtzdHJpbmd9IHNoaXBOYW1lIG5hbWUgb2Ygc2hpcCB0eXBlXHJcbiAqIEBwYXJhbSB7Q29vcmR9IHNlbGVjdGVkQ29vcmQgQ29vcmQgb2JqZWN0XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdmVydGljYWwgdmVydGljYWwgaWYgdHJ1ZSwgaG9yaXpvbnRhbCBpZiBmYWxzZVxyXG4gKiBAcmV0dXJucyBmYWxzZSBpZiBpbnZhbGlkLCBzaGlwIHBsYWNlbWVudCBkZXRhaWxzIGlmIHZhbGlkLlxyXG4gKi9cclxuZnVuY3Rpb24gZGV0ZXJtaW5lU2hpcERldGFpbHMoc2hpcE5hbWUsIHNlbGVjdGVkQ29vcmQsIHZlcnRpY2FsKSB7XHJcbiAgLy8gdmFsaWRhdGUgc3RhcnQgY29vcmRzXHJcbiAgaWYgKCF2YWxpZGF0ZUNvb3JkcyhzZWxlY3RlZENvb3JkKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAvLyB2YWxpZGF0ZSBzaGlwIG5hbWUgYW5kIGluc3RhbnRpYXRlIHNoaXBcclxuICBsZXQgc2hpcDtcclxuICB0cnkge1xyXG4gICAgc2hpcCA9IG5ldyBTaGlwKHNoaXBOYW1lKTtcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGMgPSBzZWxlY3RlZENvb3JkO1xyXG4gIGNvbnN0IHNoaXBQbGFjZW1lbnRDb29yZHMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuaHVsbC5sZW5ndGg7IGkrKykge1xyXG4gICAgc2hpcFBsYWNlbWVudENvb3Jkcy5wdXNoKG5ldyBDb29yZChjLngsIGMueSkpO1xyXG4gICAgaWYgKHZlcnRpY2FsKSBjLnkrKztcclxuICAgIGVsc2UgYy54Kys7XHJcbiAgfVxyXG5cclxuICAvLyB2YWxpZGF0ZSBlbmQgY29vcmRzXHJcbiAgaWYgKCF2YWxpZGF0ZUNvb3JkcyhzaGlwUGxhY2VtZW50Q29vcmRzLmF0KC0xKSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgLy8gcmV0dXJuIHNoaXAgcGxhY2VtZW50IGRldGFpbHNcclxuICByZXR1cm4ge1xyXG4gICAgc2hpcCxcclxuICAgIGNvb3Jkczogc2hpcFBsYWNlbWVudENvb3JkcyxcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVmFsaWRhdGUgYmFzaWMgY29vcmQgdmFsdWVzLlxyXG4gKiBAcGFyYW0ge0Nvb3JkfSBjb29yZHMgb2JqZWN0IGxpdGVyYWwgY29udGFpbmluZyB4IGFuZCB5IHByb3BlcnRpZXNcclxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgY29vcmRzIGFyZSB2YWxpZCwgZmFsc2UgaWYgaW52YWxpZFxyXG4gKi9cclxuZnVuY3Rpb24gdmFsaWRhdGVDb29yZHMoY29vcmRzKSB7XHJcbiAgaWYgKHR5cGVvZiBjb29yZHMueCAhPT0gJ251bWJlcidcclxuICAgIHx8IHR5cGVvZiBjb29yZHMueSAhPT0gJ251bWJlcidcclxuICAgIHx8IGNvb3Jkcy54IDwgMFxyXG4gICAgfHwgY29vcmRzLnkgPCAwXHJcbiAgICB8fCBjb29yZHMueCA+PSBCT0FSRF9TSVpFXHJcbiAgICB8fCBjb29yZHMueSA+PSBCT0FSRF9TSVpFKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XHJcbmV4cG9ydCB7IEJPQVJEX1NJWkUgfTtcclxuIiwiaW1wb3J0IENvb3JkIGZyb20gJy4vQ29vcmQuanMnO1xyXG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi4vc2V0dGluZ3MuanNvbic7XHJcblxyXG5jb25zdCBCT0FSRF9TSVpFID0gc2V0dGluZ3NbJ2dhbWVib2FyZC1zaXplJ107XHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBwbGF5ZXIgb2JqZWN0XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaHVtYW4gdHJ1ZSBpZiB0aGlzIGlzIGEgaHVtYW4gcGxheWVyLCBmYWxzZSBpZiBpdCBpcyBhIGNvbXB1dGVyIHBsYXllclxyXG4gKi9cclxuZnVuY3Rpb24gUGxheWVyKGh1bWFuKSB7XHJcbiAgdGhpcy5odW1hbiA9IGh1bWFuO1xyXG4gIHRoaXMudmFsaWRNb3ZlcyA9IFtdO1xyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgQk9BUkRfU0laRTsgeCsrKSB7XHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IEJPQVJEX1NJWkU7IHkrKykge1xyXG4gICAgICB0aGlzLnZhbGlkTW92ZXMucHVzaCgodGhpcy5odW1hbikgPyBudWxsIDogbmV3IENvb3JkKHgsIHkpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIElmIHRoaXMgUGxheWVyIGlzIGh1bWFuLCB0aGVuIHJldHVybiBudWxsLlxyXG4gKiBJZiB0aGlzIHBsYXllciBpcyBjb21wdXRlciwgc2VsZWN0IGEgcmFuZG9tIHZhbGlkTW92ZSBhbmQgcmV0dXJuIGl0LlxyXG4gKiBJbiBlaXRoZXIgY2FzZSwgdGhlIG51bWJlciBvZiB2YWxpZE1vdmVzIGlzIHJlZHVjZWQgYnkgMS5cclxuICogQHJldHVybnMgbnVsbCBmb3IgaHVtYW4gcGxheWVycywgYW5kIGEgQ29vcmQgb2JqZWN0IGZvciBjb21wdXRlcnNcclxuICogQHRocm93IGlmIHZhbGlkTW92ZXMubGVuZ3RoIGlzIDAuXHJcbiAqL1xyXG5QbGF5ZXIucHJvdG90eXBlLmF0dGFjayA9IGZ1bmN0aW9uIGF0dGFjaygpIHtcclxuICBpZiAodGhpcy52YWxpZE1vdmVzLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiAodGhpcy5odW1hbilcclxuICAgICAgPyB0aGlzLnZhbGlkTW92ZXMucG9wKClcclxuICAgICAgOiB0aGlzLnZhbGlkTW92ZXMuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudmFsaWRNb3Zlcy5sZW5ndGgpLCAxKS5hdCgwKTtcclxuICB9XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdubyB2YWxpZCBtb3ZlcyByZW1haW5pbmcnKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcclxuIiwiaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzLmpzb24nO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIHNoaXAgb2JqZWN0LCBieSBzcGVjaWZ5aW5nIHRoZSBuYW1lIG9mIHRoZSBzaGlwIHJlcXVpcmVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2hpcCBuYW1lIG9mIHNoaXAsIGNvcnJlc3BvbmRzIHRvIGEgbGVuZ3RoLlxyXG4gKi9cclxuZnVuY3Rpb24gU2hpcChzaGlwKSB7XHJcbiAgdGhpcy5sZW5ndGggPSB2YWxpZGF0ZVNoaXAoc2hpcCk7XHJcbiAgdGhpcy5uYW1lID0gc2hpcDtcclxuICB0aGlzLmh1bGwgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpLmZpbGwoZmFsc2UpO1xyXG59XHJcblxyXG4vKipcclxuICogJ2hpdCcgLyBhdHRhY2sgdGhpcyBzaGlwIGF0IHNwZWNpZmllZCBpbmRleFxyXG4gKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb24gdGhlIHplcm8taW5kZXhlZCBwb3NpdG9uIG9mIHRoaXMgc2hpcHMgaHVsbCB0byByZWNvcmQgYSBoaXRcclxuICovXHJcblNoaXAucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uIGhpdChpbmRleCkge1xyXG4gIGlmIChpbmRleCA+PSB0aGlzLmxlbmd0aCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBzcGVjaWZpZWQgaGl0IGluZGV4IFwiJHtpbmRleH1cIiBpcyBncmVhdGVyIHRoYW4gYWxsb3dhYmxlIGZvciBhIHNoaXAgb2YgbGVuZ3RoICR7dGhpcy5sZW5ndGh9LmApO1xyXG4gIH0gZWxzZSBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHNwZWNpZmllZCBoaXQgaW5kZXggXCIke2luZGV4fVwiIGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcclxuICB9XHJcbiAgdGhpcy5odWxsW2luZGV4XSA9IHRydWU7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYSBzaGlwIGhhcyBzdW5rLCB0aGF0IGlzLCBpdCdzIGh1bGwgaGFzIGJlZW4gaGl0IGF0IGVhY2ggcG9zaXRpb25cclxuICogQHJldHVybnMge2Jvb2xlYW59IHJlcHJlc2VudGluZyBpZiB0aGlzIHNoaXAgaGFzIGJlZW4gc3Vua1xyXG4gKi9cclxuU2hpcC5wcm90b3R5cGUuaXNTdW5rID0gZnVuY3Rpb24gaXNTdW5rKCkge1xyXG4gIHJldHVybiB0aGlzLmh1bGwucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiBjdXJyZW50ID09PSBmYWxzZSA/IGZhbHNlIDogcHJldiwgdHJ1ZSk7XHJcbn07XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIHRoZSBsZW5ndGggb2YgYSBzaGlwLCBieSBpdCdzIG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9IHNoaXAgYSBuYW1lIG9mIGEgc2hpcFxyXG4gKiBAcmV0dXJucyB0aGUgbGVuZ3RoIG9mIHNhaWQgc2hpcFxyXG4gKiBAdGhyb3dzIEVycm9yIGlmIHNoaXAgbmFtZSBub3QgcmVjb2duaXNlZFxyXG4gKi9cclxuZnVuY3Rpb24gdmFsaWRhdGVTaGlwKHNoaXApIHtcclxuICAvLyBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcHNUeXBlcy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IChjdXJyZW50Lm5hbWUgPT09IHNoaXApID8gY3VycmVudC5sZW5ndGggOiBwcmV2LCBudWxsKTtcclxuICBjb25zdCBzaGlwTGVuZ3RoID0gc2V0dGluZ3Muc2hpcHMucmVkdWNlKChwcmV2LCBjdXIpID0+IChjdXIubmFtZSA9PT0gc2hpcCkgPyBjdXIuc2l6ZSA6IHByZXYsIG51bGwpO1xyXG4gIGlmIChzaGlwTGVuZ3RoID09PSBudWxsKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHNoaXAgcGFyYW1ldGVyIHN0cmluZyBub3QgcmVjb2duaXNlZDogXCIke3NoaXB9XCIuIEFsbG93YWJsZSB2YWx1ZXM6ICR7c2V0dGluZ3Muc2hpcHMubWFwKGUgPT4gZS5uYW1lKX1gKTtcclxuICB9XHJcbiAgcmV0dXJuIHNoaXBMZW5ndGg7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoaXA7XHJcbiIsImltcG9ydCBzZXR0aW5ncyBmcm9tICcuLi9zZXR0aW5ncy5qc29uJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQgeyBzdGFydEdhbWUsIG9uU3F1YXJlQ2xpY2ssIHBsYWNlU2hpcHNGb3JDb21wdXRlciB9IGZyb20gJy4uL29iai9HYW1lLmpzJztcclxuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuLi9vYmovR2FtZWJvYXJkJztcclxuXHJcbmNvbnN0IEJPQVJEX1NJWkUgPSBzZXR0aW5nc1snZ2FtZWJvYXJkLXNpemUnXTtcclxuY29uc3QgU0hJUFMgPSBzZXR0aW5ncy5zaGlwcztcclxuY29uc3QgVEVTVF9NT0RFID0gc2V0dGluZ3NbJ3Rlc3QtbW9kZSddO1xyXG5sZXQgcGxhY2VkU2hpcHMgPSAwO1xyXG5cclxuLyoqXHJcbiAqIFByZXBhcmVzIGNvbXBvbmVudHMgZm9yIGdhbWUgcGxheVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAvLyBkb20gZWxlbWVudHNcclxuXHJcbiAgY29uc3QgY29udGFpbmVyU2hpcFBsYWNlciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1zaGlwLXBsYWNlcicpO1xyXG4gIGNvbnN0IGNvbnRhaW5lckludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1pbnRybycpO1xyXG4gIGNvbnN0IGJ1dHRvblBsYXkgPSBjb250YWluZXJJbnRyby5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLXBsYXknKTtcclxuICBjb25zdCBwbGFjaW5nQm9hcmQgPSBjb250YWluZXJTaGlwUGxhY2VyLnF1ZXJ5U2VsZWN0b3IoJy5wbGFjaW5nLWJvYXJkJyk7XHJcbiAgY29uc3Qgc2hpcENob29zZXIgPSBjb250YWluZXJTaGlwUGxhY2VyLnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNob29zZXInKTtcclxuICBjb25zdCBjb25zdHJ1Y3Rpb25Cb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcclxuXHJcbiAgLy8gY3JlYXRlIGEgYm9hcmQgZm9yIHBsYWNpbmcgc2hpcHMgb250b1xyXG5cclxuICBwbGFjaW5nQm9hcmQuYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZEVsZW1lbnQoQk9BUkRfU0laRSwgMCwgdHJ1ZSkpO1xyXG5cclxuICAvLyBjcmVhdGUgZHJhZ2dhYmxlIHNoaXAgcmVwcmVzZW50YXRpb25zXHJcblxyXG4gIGZvciAoY29uc3Qgc2hpcCBvZiBTSElQUykge1xyXG4gICAgY29uc3Qgc2hpcERyYWdnYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2hpcERyYWdnYWJsZS5jbGFzc0xpc3QuYWRkKCdzaGlwLWRyYWdnYWJsZScpO1xyXG4gICAgc2hpcERyYWdnYWJsZS5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgc2hpcERyYWdnYWJsZS5kYXRhc2V0LnNoaXBOYW1lID0gc2hpcC5uYW1lO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkrKykgeyAvLyBhZGQgYm94cyB1cCB0byBzaGlwIGxlbmd0aFxyXG4gICAgICBzaGlwRHJhZ2dhYmxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcclxuICAgIH1cclxuICAgIHNoaXBDaG9vc2VyLmFwcGVuZChzaGlwRHJhZ2dhYmxlKTtcclxuICB9XHJcblxyXG4gIC8vIHNoaXAgcGxhY2VtZW50IGRpcmVjdGlvbiBidXR0b24gKHZlcnRpY2FsLyBob3Jpem9udGFsKVxyXG5cclxuICBjb25zdCBkaXJlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBkaXJlY3Rpb25CdXR0b24udHlwZSA9ICdidXR0b24nO1xyXG4gIGRpcmVjdGlvbkJ1dHRvbi5jbGFzc05hbWUgPSAnZGlyZWN0aW9uLWJ1dHRvbic7XHJcbiAgZGlyZWN0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gJ2hvcml6b250YWwnO1xyXG4gIGRpcmVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IHZlcnRpY2FsID0gZGlyZWN0aW9uQnV0dG9uLnRleHRDb250ZW50ID09PSAndmVydGljYWwnO1xyXG4gICAgZGlyZWN0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gdmVydGljYWwgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xyXG4gIH0pO1xyXG4gIHNoaXBDaG9vc2VyLmFwcGVuZENoaWxkKGRpcmVjdGlvbkJ1dHRvbik7XHJcblxyXG4gIC8vIHJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyc1xyXG5cclxuICBidXR0b25QbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29udGFpbmVyU2hpcFBsYWNlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGNvbnRhaW5lckludHJvLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH0pO1xyXG5cclxuICBmb3IgKGNvbnN0IGRyYWdnYWJsZSBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1kcmFnZ2FibGUnKSkge1xyXG4gICAgZHJhZ2dhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGUgPT4ge1xyXG4gICAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xyXG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZHJhZ2dhYmxlLmRhdGFzZXQuc2hpcE5hbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGNvbnN0IGRyb3BwYWJsZSBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQuc3F1YXJlJykpIHtcclxuICAgIGRyb3BwYWJsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcclxuICAgIGRyb3BwYWJsZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGFTaGlwTmFtZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTsgLy8gXCJwYXRyb2wgYm9hdFwiIGV0Y1xyXG4gICAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IGRyYWdnaW5nU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaGlwLWRyYWdnYWJsZVtkYXRhLXNoaXAtbmFtZT1cIiR7ZGF0YVNoaXBOYW1lfVwiXWApO1xyXG4gICAgICBjb25zdCBhY2NlcHRlZCA9IGNvbnN0cnVjdGlvbkJvYXJkLnBsYWNlU2hpcChcclxuICAgICAgICBkcmFnZ2luZ1NoaXAuZGF0YXNldC5zaGlwTmFtZSxcclxuICAgICAgICBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmNvbCwgMTApLFxyXG4gICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQucm93LCAxMCksXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpcmVjdGlvbi1idXR0b24nKS50ZXh0Q29udGVudCA9PT0gJ3ZlcnRpY2FsJyxcclxuICAgICAgKTtcclxuICAgICAgaWYgKGFjY2VwdGVkKSB7XHJcbiAgICAgICAgcGxhY2VkU2hpcHMrKztcclxuICAgICAgICByZW5kZXJOZXcoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNpbmctYm9hcmQ+LmJvYXJkJyksIGNvbnN0cnVjdGlvbkJvYXJkKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jaG9vc2VyJykucmVtb3ZlQ2hpbGQoZHJhZ2dpbmdTaGlwKTtcclxuICAgICAgICBpZiAocGxhY2VkU2hpcHMgPT09IFNISVBTLmxlbmd0aCkge1xyXG4gICAgICAgICAgcGxhY2VkU2hpcHMgPSAwO1xyXG4gICAgICAgICAgY29uc3QgYiA9IHBsYWNlU2hpcHNGb3JDb21wdXRlcihTSElQUy5tYXAoc2hpcERldGFpbHMgPT4gc2hpcERldGFpbHMubmFtZSkpO1xyXG4gICAgICAgICAgcHJlcGFyZVVJRm9yR2FtZSgpO1xyXG4gICAgICAgICAgc3RhcnRHYW1lKGNvbnN0cnVjdGlvbkJvYXJkLCBiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgdGVzdCBtb2RlIGlzIHRydWUsIHRoZW4gc2tpcCBwbGF5IGJ1dHRvbiwgYW5kIHNoaXAgcGxhY2VtZW50IHNjcmVlbiwgYW5kIGp1c3Qgc3RhcnQgZ2FtZSB3aXRoIHJhbmRvbWx5IHBsYWNlZCBzaGlwc1xyXG5cclxuICBpZiAoVEVTVF9NT0RFKSB7XHJcbiAgICBidXR0b25QbGF5LmNsaWNrKCk7XHJcbiAgICBjb250YWluZXJTaGlwUGxhY2VyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgY29udGFpbmVySW50cm8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBwcmVwYXJlVUlGb3JHYW1lKCk7XHJcbiAgICBzdGFydEdhbWUoXHJcbiAgICAgIHBsYWNlU2hpcHNGb3JDb21wdXRlcihTSElQUy5tYXAoZSA9PiBlLm5hbWUpKSxcclxuICAgICAgcGxhY2VTaGlwc0ZvckNvbXB1dGVyKFNISVBTLm1hcChlID0+IGUubmFtZSkpLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcmVwYXJlcyB0aGUgVUkgZm9yIGEgbmV3IGdhbWUuXHJcbiAqIFRoZSBzaGlwLXBsYWNlciBib2FyZCAgaXMgcmVtb3ZlZCwgYW5kIHRoZSBzaGlwIHBsYWNlciBjb250YWluZXIgZGl2IGlzIGhpZGRlbi5cclxuICogVGhlIHJlYWwgYm9hcmQgY29udGFpbmVyIGFuZCBnYW1lIGluZm8gY29udGFpbmVyIGFyZSB0aGVuIHNob3duLlxyXG4gKi9cclxuZnVuY3Rpb24gcHJlcGFyZVVJRm9yR2FtZSgpIHtcclxuICAvLyBDbG9zZSBzaGlwIHBsYWNlciAoYW5kIGFsc28gcmVtb3ZlIHBsYWNpbmcgYm9hcmQgLSByZWdlbmVyYXRlIGlmIG5lZWRlZClcclxuXHJcbiAgY29uc3QgY29udGFpbmVyU2hpcFBsYWNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItc2hpcC1wbGFjZXInKTtcclxuICBjb250YWluZXJTaGlwUGxhY2VyLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjaW5nLWJvYXJkJykpO1xyXG4gIGNvbnRhaW5lclNoaXBQbGFjZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gIC8vIHNob3cgY29udGFpbmVyIGJvYXJkIGFuZCBjb250YWluZXIgZ2FtZSBpbmZvXHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lckJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItYm9hcmQnKTtcclxuICBjb250YWluZXJCb2FyZHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lckdhbWVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1nYW1lLWluZm8nKTtcclxuICBjb250YWluZXJHYW1lSW5mby5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgLy8gYXBwZW5kIG5ldyBlbXB0eSBib2FyZCB0byBjb250YWluZXIgYm9hcmRzXHJcblxyXG4gIGNvbnRhaW5lckJvYXJkcy5hcHBlbmRDaGlsZChidWlsZEJvYXJkRWxlbWVudChCT0FSRF9TSVpFLCAwKSk7XHJcbiAgY29udGFpbmVyQm9hcmRzLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmRFbGVtZW50KEJPQVJEX1NJWkUsIDEpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIHZpc3VhbCByZXByZXNlbnRhdGlvbiBvZiBhIEdhbWVib2FyZFxyXG4gKiBAcGFyYW0ge251bWJlcn0gYm9hcmRTaXplIHRoZSBsZW5ndGggb2YgdGhlIGdhbWVib2FyZCBzaWRlc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgaWQgYXR0cmlidXRlIG9mIHRoaXMgSFRNTCBlbGVtZW50XHJcbiAqIEByZXR1cm5zIEhUTUxEaXZFbGVtZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBidWlsZEJvYXJkRWxlbWVudChib2FyZFNpemUsIHBsYXllckluZGV4KSB7XHJcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBib2FyZC5jbGFzc05hbWUgPSAnYm9hcmQnO1xyXG4gIGJvYXJkLmlkID0gKHBsYXllckluZGV4ID09PSAwKSA/ICdwbGF5ZXIxJyA6ICdwbGF5ZXIyJztcclxuICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgYm9hcmRTaXplOyByb3dJbmRleCsrKSB7XHJcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJvdy5jbGFzc05hbWUgPSAncm93JztcclxuICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBib2FyZFNpemU7IGNvbEluZGV4KyspIHtcclxuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHNxdWFyZS5jbGFzc05hbWUgPSAnYm9hcmQgc3F1YXJlJztcclxuICAgICAgc3F1YXJlLmRhdGFzZXQuY29sID0gY29sSW5kZXg7XHJcbiAgICAgIHNxdWFyZS5kYXRhc2V0LnJvdyA9IHJvd0luZGV4O1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGVsLCBldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghZWwuc3JjRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0cnVjaycpKSB7XHJcbiAgICAgICAgICBvblNxdWFyZUNsaWNrKGNvbEluZGV4LCByb3dJbmRleCwgcGxheWVySW5kZXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1tc2cnKTtcclxuICAgICAgICAgIG1zZy50ZXh0Q29udGVudCA9ICdhbHJlYWR5IGF0dGFja2VkIHRoaXMgc3F1YXJlISc7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgbXNnLnRleHRDb250ZW50ID0gJyc7IH0sIDMwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChzcXVhcmUpO1xyXG4gICAgfVxyXG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcclxuICB9XHJcbiAgcmV0dXJuIGJvYXJkO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gdWlFbGVtZW50IHRoZSBib2FyZCBkaXZcclxuICogQHBhcmFtIHtHYW1lYm9hcmR9IGJvYXJkIHRoZSBHYW1lYm9hcmQgb2JqZWN0IHVuZGVycGlubmluZyB0aGUgdWlFbGVtZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTmV3KHVpRWxlbWVudCwgYm9hcmQpIHtcclxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBib2FyZC5zaXplOyByb3crKykge1xyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgYm9hcmQuc2l6ZTsgY29sKyspIHtcclxuICAgICAgcHJvY2Vzc0JvYXJkU3F1YXJlKFxyXG4gICAgICAgIHVpRWxlbWVudC5jaGlsZE5vZGVzW3Jvd10uY2hpbGROb2Rlc1tjb2xdLFxyXG4gICAgICAgIGJvYXJkLmJvYXJkW3Jvd11bY29sXSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJdGVyYXRlIHRocm91Z2guXHJcbiAqIEBwYXJhbSB7R2FtZURhdGF9IGdhbWVEYXRhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQm9hcmRzKGdhbWVEYXRhKSB7XHJcbiAgLy8gY29uc3QgdWliMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BsYXllcjEnKTtcclxuICAvLyBjb25zdCB1aWIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncGxheWVyMicpO1xyXG5cclxuICAvLyBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBnYW1lRGF0YS5wMS5ib2FyZC5zaXplOyByb3crKykge1xyXG4gIC8vICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgZ2FtZURhdGEucDEuYm9hcmQuc2l6ZTsgY29sKyspIHtcclxuICAvLyAgICAgcHJvY2Vzc0JvYXJkU3F1YXJlKFxyXG4gIC8vICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxJykuY2hpbGROb2Rlc1tyb3ddLmNoaWxkTm9kZXNbY29sXSxcclxuICAvLyAgICAgICBnYW1lRGF0YS5wMS5ib2FyZC5ib2FyZFtyb3ddW2NvbF0sXHJcbiAgLy8gICAgICk7XHJcbiAgLy8gICAgIHByb2Nlc3NCb2FyZFNxdWFyZShcclxuICAvLyAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMicpLmNoaWxkTm9kZXNbcm93XS5jaGlsZE5vZGVzW2NvbF0sXHJcbiAgLy8gICAgICAgZ2FtZURhdGEucDIuYm9hcmQuYm9hcmRbcm93XVtjb2xdLFxyXG4gIC8vICAgICApO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wbGF5ZXI+c3BhbicpLnRleHRDb250ZW50ID0gZ2FtZURhdGEuY3VycmVudFBsYXllciArIDE7XHJcbiAgcmVuZGVyTmV3KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxJyksIGdhbWVEYXRhLnAxLmJvYXJkKTtcclxuICByZW5kZXJOZXcoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjInKSwgZ2FtZURhdGEucDIuYm9hcmQpO1xyXG59XHJcblxyXG4vKipcclxuICAgKiBUYWtlcyBhIHBhaXIgb2YgY29ubmVjdGVkIHNxdWFyZXMuIE9uZSBpcyBhIEhUTUxEaXZFbGVtZW50IGZyb20gdGhlIFVJLCB0aGUgb3RoZXIgaXMgYSBzcXVhcmUgZnJvbSB0aGUgR2FtZWJvYXJkIG9iamVjdCdzXHJcbiAgICogYm9hcmQgcHJvcGVydHkuXHJcbiAgICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gdWlTcXVhcmVcclxuICAgKiBAcGFyYW0ge0JvYXJkUGxhY2VtZW50fSBkYXRhU3F1YXJlXHJcbiAgICovXHJcbmZ1bmN0aW9uIHByb2Nlc3NCb2FyZFNxdWFyZSh1aVNxdWFyZSwgZGF0YVNxdWFyZSkge1xyXG4gIC8vIGlmIHNxdWFyZSBpcyBlbXB0eVxyXG4gIGlmIChkYXRhU3F1YXJlID09PSBudWxsKSB7XHJcbiAgICB1aVNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBpZiBzcXVhcmUgY29udGFpbnMgYSBib2FyZCBwbGFjZW1lbnQgYWthIGEgc2hpcFxyXG4gIGlmICh0eXBlb2YgZGF0YVNxdWFyZSA9PT0gJ29iamVjdCcpIHtcclxuICAgIHVpU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcclxuICAgIGlmIChkYXRhU3F1YXJlLmlzU3RydWNrKCkpIHtcclxuICAgICAgdWlTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3RydWNrJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBpZiBzcXVhcmUgY29udGFpbnMgYSBzdHJpbmcsIGluZGljYXRpbmcgYSBtaXNzXHJcbiAgaWYgKHR5cGVvZiBkYXRhU3F1YXJlID09PSAnc3RyaW5nJykge1xyXG4gICAgdWlTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3RydWNrJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVjbGFyZVdpbm5lcihtZXNzYWdlKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tbXNnJykudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBpbml0aWFsaXplIGZyb20gJy4vdWkuanMnO1xyXG5cclxuaW5pdGlhbGl6ZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=