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

/**
 * @param {String[]} ships names of all ships to be placed
 * @param {Gameboard} gameboard 
 */
function placeShipsForComputer(ships) {
  const board = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
  for (const ship of ships) {
    let complete = false;
    while (!complete) {
      complete = board.placeShip(
        ship,
        parseInt(Math.random() * 10),
        parseInt(Math.random() * 10),
        Math.random() < 0.5 ? true : false
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
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', draggable.dataset.shipName);
    });
  }

  for (const droppable of document.querySelectorAll('.board.square')) {
    droppable.addEventListener('dragover', e => {
      e.preventDefault();
    });
    droppable.addEventListener('drop', e => {
      const dataShipName = e.dataTransfer.getData('text/plain'); // "patrol boat" etc
      e.dataTransfer.dropEffect = 'move';
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
        if (placedShips === SHIPS.length) {
          const b = (0,_obj_Game_js__WEBPACK_IMPORTED_MODULE_1__.placeShipsForComputer)(SHIPS.map(e => e.name));
          prepareUIForGame();
          (0,_obj_Game_js__WEBPACK_IMPORTED_MODULE_1__.startGame)(constructionBoard, b);
        }
      }
    });
  }

  // dev
  buttonPlay.click(); // jumps past play button by pressing it
}

function prepareUIForGame() {
  document.body.removeChild(document.querySelector('.container-ship-placer'));
  const containerBoards = document.querySelector('.container-board');
  containerBoards.classList.remove('hidden');

  const containerGameInfo = document.querySelector('.container-game-info');
  containerGameInfo.classList.remove('hidden');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzdOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNXO0FBQ2pDO0FBQ0Esa0RBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3dlYi9zdHlsZXMuY3NzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3dlYi9zdHlsZXMuY3NzPzQzNDAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL0JvYXJkUGxhY2VtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9vYmovQ29vcmQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL29iai9HYW1lLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9vYmovR2FtZURhdGEuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL29iai9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL29iai9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL29iai9TaGlwLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy93ZWIvdWkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3dlYi9Db250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1zcXVhcmUtZGltZW5zaW9uOiA0NXB4O1xcclxcbiAgLS1ib3JkZXItY29sb3I6IHJnYigxNjAsIDE1MSwgMjQ3KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQm9hcmQgKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyLWJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiAxZnIvIHJlcGVhdCgyLCAxZnIpO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZXZpb2xldDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1zaGlwLXBsYWNlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItc2hpcC1wbGFjZXI+ZGl2e1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIFxcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkPi5yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCAuc3F1YXJlIHtcXHJcXG4gIGhlaWdodDogdmFyKC0tc3F1YXJlLWRpbWVuc2lvbik7XFxyXFxuICB3aWR0aDogdmFyKC0tc3F1YXJlLWRpbWVuc2lvbik7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyMSAuYm9hcmQuc3F1YXJlLnNoaXAge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLnNxdWFyZS5zdHJ1Y2sge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgMTgyLCAxODIpO1xcclxcbiAgLyogYm9yZGVyOiAzcHggc29saWQgYmxhY2s7ICovXFxyXFxufVxcclxcbiNwbGF5ZXIxIC5ib2FyZC5zcXVhcmUuc3RydWNrLnNoaXAsXFxyXFxuI3BsYXllcjIgLmJvYXJkLnNxdWFyZS5zdHJ1Y2suc2hpcCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOmNyaW1zb247XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNob29zZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDBweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hvb3Nlci1yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWRyYWdnYWJsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdvbGRlbnJvZDtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtZHJhZ2dhYmxlPmRpdntcXHJcXG4gIHdpZHRoOiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXHJcXG4gIGhlaWdodDogdmFyKC0tc3F1YXJlLWRpbWVuc2lvbik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBnb2xkZW5yb2Q7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWhvdmVyZWQge1xcclxcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnZlcnRpY2FsIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3dlYi9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtDQUFrQztBQUNwQzs7QUFFQSxVQUFVOztBQUVWO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIsbUJBQW1COztFQUVuQixXQUFXOztFQUVYLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDZCQUE2QjtBQUMvQjtBQUNBOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1zcXVhcmUtZGltZW5zaW9uOiA0NXB4O1xcclxcbiAgLS1ib3JkZXItY29sb3I6IHJnYigxNjAsIDE1MSwgMjQ3KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQm9hcmQgKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyLWJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiAxZnIvIHJlcGVhdCgyLCAxZnIpO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZXZpb2xldDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1zaGlwLXBsYWNlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItc2hpcC1wbGFjZXI+ZGl2e1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIFxcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkPi5yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCAuc3F1YXJlIHtcXHJcXG4gIGhlaWdodDogdmFyKC0tc3F1YXJlLWRpbWVuc2lvbik7XFxyXFxuICB3aWR0aDogdmFyKC0tc3F1YXJlLWRpbWVuc2lvbik7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyMSAuYm9hcmQuc3F1YXJlLnNoaXAge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLnNxdWFyZS5zdHJ1Y2sge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgMTgyLCAxODIpO1xcclxcbiAgLyogYm9yZGVyOiAzcHggc29saWQgYmxhY2s7ICovXFxyXFxufVxcclxcbiNwbGF5ZXIxIC5ib2FyZC5zcXVhcmUuc3RydWNrLnNoaXAsXFxyXFxuI3BsYXllcjIgLmJvYXJkLnNxdWFyZS5zdHJ1Y2suc2hpcCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOmNyaW1zb247XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNob29zZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDBweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hvb3Nlci1yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWRyYWdnYWJsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdvbGRlbnJvZDtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtZHJhZ2dhYmxlPmRpdntcXHJcXG4gIHdpZHRoOiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXHJcXG4gIGhlaWdodDogdmFyKC0tc3F1YXJlLWRpbWVuc2lvbik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBnb2xkZW5yb2Q7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWhvdmVyZWQge1xcclxcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnZlcnRpY2FsIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKlxyXG4gKiBBbiBvYmplY3QgdGhhdCByZWNvcmRzIGRhdGEgcmVxdWlyZWQgZm9yIHBsYWNlbWVudCBvbnRvIGEgc3F1YXJlIG9mIHRoZSBHYW1lYm9hcmQgb2JqZWN0cyBib2FyZCBwcm9wZXJ0eVxyXG4gKiBAcGFyYW0ge1NoaXB9IHNoaXBcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZFBsYWNlbWVudChzaGlwLCBpbmRleCkge1xyXG4gIHRoaXMuc2hpcCA9IHNoaXA7XHJcbiAgdGhpcy5zaGlwSHVsbEluZGV4ID0gaW5kZXg7XHJcbn1cclxuXHJcbkJvYXJkUGxhY2VtZW50LnByb3RvdHlwZS5pc1N0cnVjayA9IGZ1bmN0aW9uIGlzU3RydWNrKCkge1xyXG4gIHJldHVybiB0aGlzLnNoaXAuaHVsbFt0aGlzLnNoaXBIdWxsSW5kZXhdO1xyXG59O1xyXG4iLCIvKipcclxuICogQ3JlYXRlIGEgY29vcmQgb2JqZWN0IHRoYXQgaG9sZHMgeCBhbmQgeSBudW1iZXJpYyB2YWx1ZXMgZm9yIGEgYm9hcmQgY28tb3JkaW5hdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHggeCBjby1vcmRpbmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0geSB5IGNvLW9yZGluYXRlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb29yZCh4LCB5KSB7XHJcbiAgdGhpcy54ID0gcGFyc2VJbnQoeCwgMTApO1xyXG4gIHRoaXMueSA9IHBhcnNlSW50KHksIDEwKTtcclxufVxyXG4iLCJpbXBvcnQgR2FtZURhdGEgZnJvbSAnLi9HYW1lRGF0YS5qcyc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7IHJlbmRlckJvYXJkcywgZGVjbGFyZVdpbm5lciB9IGZyb20gJy4uL3dlYi91aS5qcyc7XHJcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQuanMnO1xyXG5cclxubGV0IGdhbWVEYXRhID0gbnVsbDtcclxubGV0IGdhbWVBY3RpdmUgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydEdhbWUoYjEsIGIyKSB7XHJcbiAgLy8gc2V0IGdhbWUgZGF0YVxyXG4gIGdhbWVBY3RpdmUgPSB0cnVlO1xyXG4gIGdhbWVEYXRhID0gbmV3IEdhbWVEYXRhKFxyXG4gICAgbmV3IFBsYXllcih0cnVlKSxcclxuICAgIG5ldyBQbGF5ZXIoZmFsc2UpLFxyXG4gICAgYjEsXHJcbiAgICBiMixcclxuICApO1xyXG4gIHJlbmRlckJvYXJkcyhnYW1lRGF0YSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIGFuIGV2ZW50IGhhbmRsZXIgdGhhdCBpcyBhY3RpdmF0ZWQgZWFjaCB0aW1lIGEgdmFsaWQgYm9hcmQgc3F1YXJlIGlzIGNsaWNrZWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IHggY28tb3JkaW5hdGUgb2YgZ2FtZWJvYXJkIChvdXRlciBhcnJheSBpbmRleClcclxuICogQHBhcmFtIHtudW1iZXJ9IHkgeSBjby1vcmRpbmF0ZSAgICAgICAgICAgICAgKGlubmVyIGFycmF5IGluZGV4KVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcGxheWVySW5kZXggdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IHBsYXllciBmb3IgdXNlIGluIGdhbWVEYXRhLnBsYXllcnNbaW5kZXhdLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9uU3F1YXJlQ2xpY2soeCwgeSwgcGxheWVySW5kZXgpIHtcclxuICBpZiAoIWdhbWVBY3RpdmUgfHwgZ2FtZURhdGEgPT09IG51bGwpIHJldHVybjtcclxuICBpZiAoZ2FtZURhdGEuZW5lbXlQbGF5ZXIgPT09IHBsYXllckluZGV4KSB7XHJcbiAgICBnYW1lRGF0YS5wbGF5ZXJzW3BsYXllckluZGV4XS5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xyXG4gICAgaWYgKGdhbWVEYXRhLnBsYXllcnNbcGxheWVySW5kZXhdLmJvYXJkLmFsbFN1bmsoKSkge1xyXG4gICAgICBnYW1lQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIC8vIHBsYXllciBoYXMgbm90IGNoYW5nZWQgeWV0LCBzbyBjdXJyZW50IHBsYXllciBpcyBhbGxTdW5rICYgdGhlcmVmb3JlIGxvc2VzLlxyXG4gICAgICBkZWNsYXJlV2lubmVyKGBHYW1lb3ZlciEgJHtwbGF5ZXJJbmRleCA9PT0gMCA/ICdDb21wdXRlcicgOiAnSHVtYW4nfSBwbGF5ZXIgd2lucyFgKTtcclxuICAgIH1cclxuICAgIGdhbWVEYXRhLmNoYW5nZVBsYXllcigpO1xyXG4gICAgcmVuZGVyQm9hcmRzKGdhbWVEYXRhKTtcclxuICAgIGlmICghZ2FtZURhdGEuaXNDdXJyZW50UGxheWVySHVtYW4oKSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnY29tcHV0ZXIgcGxheWVycyBnbyBub3cnKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXR0YWNrQ29vcmRzID0gZ2FtZURhdGEucGxheWVyc1tnYW1lRGF0YS5jdXJyZW50UGxheWVyXS5wbGF5ZXIuYXR0YWNrKCk7XHJcbiAgICAgICAgb25TcXVhcmVDbGljayhhdHRhY2tDb29yZHMueCwgYXR0YWNrQ29vcmRzLnksIGdhbWVEYXRhLmVuZW15UGxheWVyKTtcclxuICAgICAgfSwgMSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdhaW50IHlhIGdvIHNvbiwgc2ltbWVyIGRvd24nKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBzaGlwcyBuYW1lcyBvZiBhbGwgc2hpcHMgdG8gYmUgcGxhY2VkXHJcbiAqIEBwYXJhbSB7R2FtZWJvYXJkfSBnYW1lYm9hcmQgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VTaGlwc0ZvckNvbXB1dGVyKHNoaXBzKSB7XHJcbiAgY29uc3QgYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XHJcbiAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XHJcbiAgICBsZXQgY29tcGxldGUgPSBmYWxzZTtcclxuICAgIHdoaWxlICghY29tcGxldGUpIHtcclxuICAgICAgY29tcGxldGUgPSBib2FyZC5wbGFjZVNoaXAoXHJcbiAgICAgICAgc2hpcCxcclxuICAgICAgICBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMTApLFxyXG4gICAgICAgIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMCksXHJcbiAgICAgICAgTWF0aC5yYW5kb20oKSA8IDAuNSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYm9hcmQ7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEhvbGRzIGRhdGEgYWJvdXQgYSBnYW1lLiBUaGVyZSBhcmUgdHdvIHBsYXllcnMsIGVhY2ggaG9sZGluZyBkYXRhIG9uIHRoZSBwbGF5ZXIgaXRzZWxmLCBhbmQgdGhlaXIgYm9hcmQuXHJcbiAqIEFkZGl0aW9uYWwgdGhlIGN1cnJlbnQgcGxheWVyIGFuZCBlbmVteSBwbGF5ZXJzIGFyZSBzdG9yZWQgaGVyZS5cclxuICogQHBhcmFtIHsqfSBwMSBwbGF5ZXIgMSdzIHBsYXllciBvYmplY3RcclxuICogQHBhcmFtIHsqfSBwMiBwbGF5ZXIgMidzIHBsYXllciBvYmplY3RcclxuICogQHBhcmFtIHsqfSBiMSBwbGF5ZXIgMSdzIGJvYXJkIG9iamVjdFxyXG4gKiBAcGFyYW0geyp9IGIyIHBsYXllciAyJ3MgYm9hcmQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lRGF0YShwMSwgcDIsIGIxLCBiMikge1xyXG4gIHRoaXMucDEgPSB7IHBsYXllcjogcDEsIGJvYXJkOiBiMSB9O1xyXG4gIHRoaXMucDIgPSB7IHBsYXllcjogcDIsIGJvYXJkOiBiMiB9O1xyXG4gIHRoaXMucGxheWVycyA9IFt0aGlzLnAxLCB0aGlzLnAyXTtcclxuICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSAwO1xyXG4gIHRoaXMuZW5lbXlQbGF5ZXIgPSAxO1xyXG59XHJcblxyXG4vKipcclxuICogU3dhcHMgY3VycmVudFBsYXllciBhbmQgZW5lbXlQbGF5ZXIgb2YgZ2FtZURhdGFcclxuICovXHJcbkdhbWVEYXRhLnByb3RvdHlwZS5jaGFuZ2VQbGF5ZXIgPSBmdW5jdGlvbiBjaGFuZ2VQbGF5ZXIoKSB7XHJcbiAgdGhpcy5jdXJyZW50UGxheWVyID0gKHRoaXMuY3VycmVudFBsYXllciA9PT0gMCkgPyAxIDogMDtcclxuICB0aGlzLmVuZW15UGxheWVyID0gKHRoaXMuZW5lbXlQbGF5ZXIgPT09IDApID8gMSA6IDA7XHJcbn07XHJcblxyXG5HYW1lRGF0YS5wcm90b3R5cGUuaXNDdXJyZW50UGxheWVySHVtYW4gPSBmdW5jdGlvbiBjdXJyZW50UGxheWVySHVtYW4oKSB7XHJcbiAgcmV0dXJuIHRoaXMucGxheWVyc1t0aGlzLmN1cnJlbnRQbGF5ZXJdLnBsYXllci5odW1hbjtcclxufTtcclxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwLmpzJztcclxuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzLmpzb24nO1xyXG5pbXBvcnQgQm9hcmRQbGFjZW1lbnQgZnJvbSAnLi9Cb2FyZFBsYWNlbWVudC5qcyc7XHJcbmltcG9ydCBDb29yZCBmcm9tICcuL0Nvb3JkLmpzJztcclxuXHJcbi8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ09OU1RBTlRTXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5jb25zdCBCT0FSRF9TSVpFID0gc2V0dGluZ3NbJ2dhbWVib2FyZC1zaXplJ107XHJcblxyXG4vKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENPTlNUUlVDVE9SU1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIEdhbWVib2FyZCBvYmplY3RcclxuICogQHBhcmFtIHtudW1iZXIgfCB1bmRlZmluZWR9IHNpemUgZGVmYXVsdHMgdG8gMTAgYnV0IGNhbiBiZSBzZXQgbWFudWFsbHlcclxuICovXHJcbmZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcclxuICB0aGlzLnNpemUgPSBCT0FSRF9TSVpFO1xyXG4gIHRoaXMuYm9hcmQgPSBuZXcgQXJyYXkodGhpcy5zaXplKS5maWxsKG51bGwpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgdGhpcy5ib2FyZFtpXSA9IG5ldyBBcnJheSh0aGlzLnNpemUpLmZpbGwobnVsbCk7XHJcbiAgfVxyXG4gIHRoaXMubWlzc2VzID0gW107XHJcbiAgdGhpcy5zaGlwcyA9IFtdO1xyXG59XHJcblxyXG4vKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIE1FVEhPRFNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbi8qKlxyXG4gKiBQbGFjZSBhIHNoaXAgb24gdGhlIGJvYXJkXHJcbiAqIEBwYXJhbSB7U2hpcH0gc2hpcE5hbWUgYSBTaGlwIG9iamVjdFxyXG4gKiBAcGFyYW0ge251bWJlcn0geCB4IGNvLW9yZGluYXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IHkgY28tb3JkaW5hdGVcclxuICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCBhIGJvb2xlYW4sIHRydWUgaWYgdmVydGljYWwsIGZhbHNlIGlmIGhvcml6b250YWxcclxuICovXHJcbkdhbWVib2FyZC5wcm90b3R5cGUucGxhY2VTaGlwID0gZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXBOYW1lLCB4LCB5LCB2ZXJ0aWNhbCkge1xyXG4gIGNvbnN0IHNoaXBEZXRhaWxzID0gZGV0ZXJtaW5lU2hpcERldGFpbHMoc2hpcE5hbWUsIG5ldyBDb29yZCh4LCB5KSwgdmVydGljYWwpO1xyXG4gIGlmICghc2hpcERldGFpbHMpIHJldHVybiBmYWxzZTtcclxuICBpZiAoIWRldGVybWluZVNoaXBPdmVybGFwLmNhbGwodGhpcywgc2hpcERldGFpbHMuY29vcmRzKSkgcmV0dXJuIGZhbHNlO1xyXG4gIGxldCBpbmRleCA9IDA7XHJcbiAgc2hpcERldGFpbHMuY29vcmRzLmZvckVhY2goZSA9PiB7IHRoaXMuYm9hcmRbZS55XVtlLnhdID0gbmV3IEJvYXJkUGxhY2VtZW50KHNoaXBEZXRhaWxzLnNoaXAsIGluZGV4KyspOyB9KTtcclxuICB0aGlzLnNoaXBzLnB1c2goc2hpcERldGFpbHMuc2hpcCk7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVjZWl2ZSBhbiBhdHRhY2suIFRoZSBhdHRhY2sgd2lsbCBlaXRoZXIgaGl0IGEgc2hpcCwgaW4gd2hpY2ggY2FzZSB0aGF0IHNoaXAgcmVjb3JkcyBhIGhpdCBhdCB0aGF0IHBvc2l0aW9uO1xyXG4gKiBvciB0aGUgYXR0YWNrIHdpbGwgbWlzcywgaW4gd2hpY2ggY2FzZSBpdCBpcyByZWNvcmRlZCBpbiB0aGUgbWlzc2VzIGFycmF5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IHggY28tb3JkaW5hdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHkgeSBjby1vcmRpbmF0ZVxyXG4gKiBAcmV0dXJucyB0cnVlIGlmIGF0dGFjayB3YXMgc3VjY2Vzc2Z1bCwgZmFsc2UgaWYgYXR0YWNrIHdhcyBhIG1pc3NcclxuICovXHJcbkdhbWVib2FyZC5wcm90b3R5cGUucmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItdGVtcGxhdGVcclxuICAvLyBjb25zb2xlLmxvZygneCBhbmQgeTonICsgeCArICcgJyArIHkpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHRoaXMuYm9hcmRbeV0pO1xyXG4gIGNvbnN0IHNxdWFyZSA9IHRoaXMuYm9hcmRbeV1beF07XHJcbiAgaWYgKHR5cGVvZiBzcXVhcmUgPT09ICdzdHJpbmcnKSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKHNxdWFyZSA9PT0gbnVsbCkge1xyXG4gICAgdGhpcy5taXNzZXMucHVzaChuZXcgQ29vcmQoeCwgeSkpO1xyXG4gICAgdGhpcy5ib2FyZFt5XVt4XSA9ICdtaXNzJztcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc3F1YXJlLnNoaXAuaGl0KHNxdWFyZS5zaGlwSHVsbEluZGV4KTtcclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBhbGwgc2hpcHMgb24gdGhlIGJvYXJkIGFyZSBzdW5rXHJcbiAqIEByZXR1cm5zIHRydWUgaWYgYWxsIHN1bmtzIGFyZSBzdW5rLCBhbmQgZmFsc2UgaWYgdGhleSBhcmUgbm90XHJcbiAqL1xyXG5HYW1lYm9hcmQucHJvdG90eXBlLmFsbFN1bmsgPSBmdW5jdGlvbiBhbGxTdW5rKCkge1xyXG4gIHJldHVybiB0aGlzLnNoaXBzLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7XHJcbiAgICBpZiAoIWN1ci5pc1N1bmsoKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHByZXY7XHJcbiAgfSwgdHJ1ZSk7XHJcbn07XHJcblxyXG4vKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEhFTFBFUiBGVU5DVElPTlNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbi8qKlxyXG4gKiAgRGV0ZXJtaW5lcyBpZiBhIHNoaXBzIHBsYWNlbWVudCBpcyBhY2NlcHRhYmxlIGluIHRoYXQgaXQgZG9lcyBub3Qgb3ZlcmxhcCBhbm90aGVyIHNoaXAuXHJcbiAqIEBwYXJhbSB7Q29vcmRbXX0gc2hpcENvb3JkcyBzaGlwIGNvb3JkcyB0byBjaGVja1xyXG4gKiBAdGhpcyB7R2FtZWJvYXJkfSB0aGlzIGZ1bmN0aW9uIG11c3QgaGF2ZSBpdHMgY29udGV4dC8gdGhpcyBzZXQgdG8gYSBnYW1lYm9hcmQgb2JqZWN0XHJcbiAqIEByZXR1cm4gYSBib29sZWFuIHJlcHJlc2VudGluZyBpZiB0aGlzIHNoaXAgcGxhY2VtZW50IGlzIHZhbGlkLCBpbiB0aGF0IGl0IGRvZXMgbm90IG92ZXJsYXAgYW5vdGhlciBzaGlwXHJcbiAqL1xyXG5mdW5jdGlvbiBkZXRlcm1pbmVTaGlwT3ZlcmxhcChzaGlwQ29vcmRzKSB7XHJcbiAgbGV0IG92ZXJsYXBGb3VuZCA9IGZhbHNlO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcENvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHRoaXMuYm9hcmRbc2hpcENvb3Jkc1tpXS55XVtzaGlwQ29vcmRzW2ldLnhdICE9PSBudWxsKSB7XHJcbiAgICAgIG92ZXJsYXBGb3VuZCA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gIW92ZXJsYXBGb3VuZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgc2hpcCBkZXRhaWxzLiBUaGF0IGlzLCB0aGUgcmVzb2x2ZXMgdGhlIHNoaXBOYW1lIHRvIGEgU2hpcCBvYmplY3QsIGFuZCBkZXRlcm1pbmVzIGFsbCB0aGUgY29vcmRpbmF0ZXMgb24gdGhlIGJvYXJkIHRoZSBTaGlwXHJcbiAqIHdvdWxkIGluaGFiaXQsIHRha2luZyBpbnRvIGNvbnNpZGVyYXRpb24gaXRzIG9yaWVudGF0aW9uIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzaGlwTmFtZSBuYW1lIG9mIHNoaXAgdHlwZVxyXG4gKiBAcGFyYW0ge0Nvb3JkfSBzZWxlY3RlZENvb3JkIENvb3JkIG9iamVjdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIHZlcnRpY2FsIGlmIHRydWUsIGhvcml6b250YWwgaWYgZmFsc2VcclxuICogQHJldHVybnMgZmFsc2UgaWYgaW52YWxpZCwgc2hpcCBwbGFjZW1lbnQgZGV0YWlscyBpZiB2YWxpZC5cclxuICovXHJcbmZ1bmN0aW9uIGRldGVybWluZVNoaXBEZXRhaWxzKHNoaXBOYW1lLCBzZWxlY3RlZENvb3JkLCB2ZXJ0aWNhbCkge1xyXG4gIC8vIHZhbGlkYXRlIHN0YXJ0IGNvb3Jkc1xyXG4gIGlmICghdmFsaWRhdGVDb29yZHMoc2VsZWN0ZWRDb29yZCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgLy8gdmFsaWRhdGUgc2hpcCBuYW1lIGFuZCBpbnN0YW50aWF0ZSBzaGlwXHJcbiAgbGV0IHNoaXA7XHJcbiAgdHJ5IHtcclxuICAgIHNoaXAgPSBuZXcgU2hpcChzaGlwTmFtZSk7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjID0gc2VsZWN0ZWRDb29yZDtcclxuICBjb25zdCBzaGlwUGxhY2VtZW50Q29vcmRzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmh1bGwubGVuZ3RoOyBpKyspIHtcclxuICAgIHNoaXBQbGFjZW1lbnRDb29yZHMucHVzaChuZXcgQ29vcmQoYy54LCBjLnkpKTtcclxuICAgIGlmICh2ZXJ0aWNhbCkgYy55Kys7XHJcbiAgICBlbHNlIGMueCsrO1xyXG4gIH1cclxuXHJcbiAgLy8gdmFsaWRhdGUgZW5kIGNvb3Jkc1xyXG4gIGlmICghdmFsaWRhdGVDb29yZHMoc2hpcFBsYWNlbWVudENvb3Jkcy5hdCgtMSkpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIC8vIHJldHVybiBzaGlwIHBsYWNlbWVudCBkZXRhaWxzXHJcbiAgcmV0dXJuIHtcclxuICAgIHNoaXAsXHJcbiAgICBjb29yZHM6IHNoaXBQbGFjZW1lbnRDb29yZHMsXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlIGJhc2ljIGNvb3JkIHZhbHVlcy5cclxuICogQHBhcmFtIHtDb29yZH0gY29vcmRzIG9iamVjdCBsaXRlcmFsIGNvbnRhaW5pbmcgeCBhbmQgeSBwcm9wZXJ0aWVzXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGNvb3JkcyBhcmUgdmFsaWQsIGZhbHNlIGlmIGludmFsaWRcclxuICovXHJcbmZ1bmN0aW9uIHZhbGlkYXRlQ29vcmRzKGNvb3Jkcykge1xyXG4gIGlmICh0eXBlb2YgY29vcmRzLnggIT09ICdudW1iZXInXHJcbiAgICB8fCB0eXBlb2YgY29vcmRzLnkgIT09ICdudW1iZXInXHJcbiAgICB8fCBjb29yZHMueCA8IDBcclxuICAgIHx8IGNvb3Jkcy55IDwgMFxyXG4gICAgfHwgY29vcmRzLnggPj0gQk9BUkRfU0laRVxyXG4gICAgfHwgY29vcmRzLnkgPj0gQk9BUkRfU0laRSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xyXG5leHBvcnQgeyBCT0FSRF9TSVpFIH07XHJcbiIsImltcG9ydCBDb29yZCBmcm9tICcuL0Nvb3JkLmpzJztcclxuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzLmpzb24nO1xyXG5cclxuY29uc3QgQk9BUkRfU0laRSA9IHNldHRpbmdzWydnYW1lYm9hcmQtc2l6ZSddO1xyXG4vKipcclxuICogQ3JlYXRlIGEgcGxheWVyIG9iamVjdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGh1bWFuIHRydWUgaWYgdGhpcyBpcyBhIGh1bWFuIHBsYXllciwgZmFsc2UgaWYgaXQgaXMgYSBjb21wdXRlciBwbGF5ZXJcclxuICovXHJcbmZ1bmN0aW9uIFBsYXllcihodW1hbikge1xyXG4gIHRoaXMuaHVtYW4gPSBodW1hbjtcclxuICB0aGlzLnZhbGlkTW92ZXMgPSBbXTtcclxuICBmb3IgKGxldCB4ID0gMDsgeCA8IEJPQVJEX1NJWkU7IHgrKykge1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBCT0FSRF9TSVpFOyB5KyspIHtcclxuICAgICAgdGhpcy52YWxpZE1vdmVzLnB1c2goKHRoaXMuaHVtYW4pID8gbnVsbCA6IG5ldyBDb29yZCh4LCB5KSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBJZiB0aGlzIFBsYXllciBpcyBodW1hbiwgdGhlbiByZXR1cm4gbnVsbC5cclxuICogSWYgdGhpcyBwbGF5ZXIgaXMgY29tcHV0ZXIsIHNlbGVjdCBhIHJhbmRvbSB2YWxpZE1vdmUgYW5kIHJldHVybiBpdC5cclxuICogSW4gZWl0aGVyIGNhc2UsIHRoZSBudW1iZXIgb2YgdmFsaWRNb3ZlcyBpcyByZWR1Y2VkIGJ5IDEuXHJcbiAqIEByZXR1cm5zIG51bGwgZm9yIGh1bWFuIHBsYXllcnMsIGFuZCBhIENvb3JkIG9iamVjdCBmb3IgY29tcHV0ZXJzXHJcbiAqIEB0aHJvdyBpZiB2YWxpZE1vdmVzLmxlbmd0aCBpcyAwLlxyXG4gKi9cclxuUGxheWVyLnByb3RvdHlwZS5hdHRhY2sgPSBmdW5jdGlvbiBhdHRhY2soKSB7XHJcbiAgaWYgKHRoaXMudmFsaWRNb3Zlcy5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuaHVtYW4pXHJcbiAgICAgID8gdGhpcy52YWxpZE1vdmVzLnBvcCgpXHJcbiAgICAgIDogdGhpcy52YWxpZE1vdmVzLnNwbGljZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnZhbGlkTW92ZXMubGVuZ3RoKSwgMSkuYXQoMCk7XHJcbiAgfVxyXG4gIHRocm93IG5ldyBFcnJvcignbm8gdmFsaWQgbW92ZXMgcmVtYWluaW5nJyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XHJcbiIsImltcG9ydCBzZXR0aW5ncyBmcm9tICcuLi9zZXR0aW5ncy5qc29uJztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBzaGlwIG9iamVjdCwgYnkgc3BlY2lmeWluZyB0aGUgbmFtZSBvZiB0aGUgc2hpcCByZXF1aXJlZC5cclxuICogQHBhcmFtIHtzdHJpbmd9IHNoaXAgbmFtZSBvZiBzaGlwLCBjb3JyZXNwb25kcyB0byBhIGxlbmd0aC5cclxuICovXHJcbmZ1bmN0aW9uIFNoaXAoc2hpcCkge1xyXG4gIHRoaXMubGVuZ3RoID0gdmFsaWRhdGVTaGlwKHNoaXApO1xyXG4gIHRoaXMubmFtZSA9IHNoaXA7XHJcbiAgdGhpcy5odWxsID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKS5maWxsKGZhbHNlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqICdoaXQnIC8gYXR0YWNrIHRoaXMgc2hpcCBhdCBzcGVjaWZpZWQgaW5kZXhcclxuICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uIHRoZSB6ZXJvLWluZGV4ZWQgcG9zaXRvbiBvZiB0aGlzIHNoaXBzIGh1bGwgdG8gcmVjb3JkIGEgaGl0XHJcbiAqL1xyXG5TaGlwLnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiBoaXQoaW5kZXgpIHtcclxuICBpZiAoaW5kZXggPj0gdGhpcy5sZW5ndGgpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgc3BlY2lmaWVkIGhpdCBpbmRleCBcIiR7aW5kZXh9XCIgaXMgZ3JlYXRlciB0aGFuIGFsbG93YWJsZSBmb3IgYSBzaGlwIG9mIGxlbmd0aCAke3RoaXMubGVuZ3RofS5gKTtcclxuICB9IGVsc2UgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBzcGVjaWZpZWQgaGl0IGluZGV4IFwiJHtpbmRleH1cIiBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XHJcbiAgfVxyXG4gIHRoaXMuaHVsbFtpbmRleF0gPSB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgc2hpcCBoYXMgc3VuaywgdGhhdCBpcywgaXQncyBodWxsIGhhcyBiZWVuIGhpdCBhdCBlYWNoIHBvc2l0aW9uXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSByZXByZXNlbnRpbmcgaWYgdGhpcyBzaGlwIGhhcyBiZWVuIHN1bmtcclxuICovXHJcblNoaXAucHJvdG90eXBlLmlzU3VuayA9IGZ1bmN0aW9uIGlzU3VuaygpIHtcclxuICByZXR1cm4gdGhpcy5odWxsLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gY3VycmVudCA9PT0gZmFsc2UgPyBmYWxzZSA6IHByZXYsIHRydWUpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSB0aGUgbGVuZ3RoIG9mIGEgc2hpcCwgYnkgaXQncyBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzaGlwIGEgbmFtZSBvZiBhIHNoaXBcclxuICogQHJldHVybnMgdGhlIGxlbmd0aCBvZiBzYWlkIHNoaXBcclxuICogQHRocm93cyBFcnJvciBpZiBzaGlwIG5hbWUgbm90IHJlY29nbmlzZWRcclxuICovXHJcbmZ1bmN0aW9uIHZhbGlkYXRlU2hpcChzaGlwKSB7XHJcbiAgLy8gY29uc3Qgc2hpcExlbmd0aCA9IHNoaXBzVHlwZXMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiAoY3VycmVudC5uYW1lID09PSBzaGlwKSA/IGN1cnJlbnQubGVuZ3RoIDogcHJldiwgbnVsbCk7XHJcbiAgY29uc3Qgc2hpcExlbmd0aCA9IHNldHRpbmdzLnNoaXBzLnJlZHVjZSgocHJldiwgY3VyKSA9PiAoY3VyLm5hbWUgPT09IHNoaXApID8gY3VyLnNpemUgOiBwcmV2LCBudWxsKTtcclxuICBpZiAoc2hpcExlbmd0aCA9PT0gbnVsbCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBzaGlwIHBhcmFtZXRlciBzdHJpbmcgbm90IHJlY29nbmlzZWQ6IFwiJHtzaGlwfVwiLiBBbGxvd2FibGUgdmFsdWVzOiAke3NldHRpbmdzLnNoaXBzLm1hcChlID0+IGUubmFtZSl9YCk7XHJcbiAgfVxyXG4gIHJldHVybiBzaGlwTGVuZ3RoO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xyXG4iLCJpbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi4vc2V0dGluZ3MuanNvbic7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHsgc3RhcnRHYW1lLCBvblNxdWFyZUNsaWNrIH0gZnJvbSAnLi4vb2JqL0dhbWUuanMnO1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuLi9vYmovU2hpcC5qcyc7XHJcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi4vb2JqL0dhbWVib2FyZCc7XHJcbmltcG9ydCB7IHBsYWNlU2hpcHNGb3JDb21wdXRlciB9IGZyb20gJy4uL29iai9HYW1lLmpzJztcclxuXHJcbmNvbnN0IEJPQVJEX1NJWkUgPSBzZXR0aW5nc1snZ2FtZWJvYXJkLXNpemUnXTtcclxuY29uc3QgU0hJUFMgPSBzZXR0aW5ncy5zaGlwcztcclxubGV0IGNvbnN0cnVjdGlvbkJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG5sZXQgZGlyZWN0aW9uID0gbnVsbDtcclxubGV0IHBsYWNlZFNoaXBzID0gMDtcclxuXHJcbi8qKlxyXG4gKiBQcmVwYXJlcyBjb21wb25lbnRzIGZvciBnYW1lIHBsYXlcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgLy8gZG9tIGVsZW1lbnRzXHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lclNoaXBQbGFjZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItc2hpcC1wbGFjZXInKTtcclxuICBjb25zdCBjb250YWluZXJJbnRybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItaW50cm8nKTtcclxuICBjb25zdCBidXR0b25QbGF5ID0gY29udGFpbmVySW50cm8ucXVlcnlTZWxlY3RvcignI2J1dHRvbi1wbGF5Jyk7XHJcbiAgY29uc3QgcGxhY2luZ0JvYXJkID0gY29udGFpbmVyU2hpcFBsYWNlci5xdWVyeVNlbGVjdG9yKCcucGxhY2luZy1ib2FyZCcpO1xyXG4gIGNvbnN0IHNoaXBDaG9vc2VyID0gY29udGFpbmVyU2hpcFBsYWNlci5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jaG9vc2VyJyk7XHJcbiAgY29uc3RydWN0aW9uQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XHJcblxyXG4gIC8vIGNyZWF0ZSBhIGJvYXJkIGZvciBwbGFjaW5nIHNoaXBzIG9udG9cclxuXHJcbiAgcGxhY2luZ0JvYXJkLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmRFbGVtZW50KEJPQVJEX1NJWkUsIDAsIHRydWUpKTtcclxuXHJcbiAgLy8gY3JlYXRlIGRyYWdnYWJsZSBzaGlwIHJlcHJlc2VudGF0aW9uc1xyXG5cclxuICBmb3IgKGNvbnN0IHNoaXAgb2YgU0hJUFMpIHtcclxuICAgIGNvbnN0IHNoaXBEcmFnZ2FibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNoaXBEcmFnZ2FibGUuY2xhc3NMaXN0LmFkZCgnc2hpcC1kcmFnZ2FibGUnKTtcclxuICAgIHNoaXBEcmFnZ2FibGUuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIHNoaXBEcmFnZ2FibGUuZGF0YXNldC5zaGlwTmFtZSA9IHNoaXAubmFtZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHsgLy8gYWRkIGJveHMgdXAgdG8gc2hpcCBsZW5ndGhcclxuICAgICAgc2hpcERyYWdnYWJsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XHJcbiAgICB9XHJcbiAgICBzaGlwQ2hvb3Nlci5hcHBlbmQoc2hpcERyYWdnYWJsZSk7XHJcbiAgfVxyXG5cclxuICAvLyBzaGlwIHBsYWNlbWVudCBkaXJlY3Rpb24gYnV0dG9uICh2ZXJ0aWNhbC8gaG9yaXpvbnRhbClcclxuXHJcbiAgY29uc3QgZGlyZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgZGlyZWN0aW9uQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuICBkaXJlY3Rpb25CdXR0b24uY2xhc3NOYW1lID0gJ2RpcmVjdGlvbi1idXR0b24nO1xyXG4gIGRpcmVjdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9ICdob3Jpem9udGFsJztcclxuICBkaXJlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCB2ZXJ0aWNhbCA9IGRpcmVjdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9PSAndmVydGljYWwnO1xyXG4gICAgZGlyZWN0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gdmVydGljYWwgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xyXG4gICAgZGlyZWN0aW9uID0gdmVydGljYWw7XHJcbiAgfSk7XHJcbiAgc2hpcENob29zZXIuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uQnV0dG9uKTtcclxuXHJcblxyXG4gIC8vIHJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyc1xyXG5cclxuICBidXR0b25QbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29udGFpbmVyU2hpcFBsYWNlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGNvbnRhaW5lckludHJvLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH0pO1xyXG5cclxuICBmb3IgKGNvbnN0IGRyYWdnYWJsZSBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1kcmFnZ2FibGUnKSkge1xyXG4gICAgZHJhZ2dhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGUgPT4ge1xyXG4gICAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xyXG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZHJhZ2dhYmxlLmRhdGFzZXQuc2hpcE5hbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGNvbnN0IGRyb3BwYWJsZSBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQuc3F1YXJlJykpIHtcclxuICAgIGRyb3BwYWJsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICAgIGRyb3BwYWJsZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGFTaGlwTmFtZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTsgLy8gXCJwYXRyb2wgYm9hdFwiIGV0Y1xyXG4gICAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IGRyYWdnaW5nU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaGlwLWRyYWdnYWJsZVtkYXRhLXNoaXAtbmFtZT1cIiR7ZGF0YVNoaXBOYW1lfVwiXWApO1xyXG4gICAgICBjb25zdCBhY2NlcHRlZCA9IGNvbnN0cnVjdGlvbkJvYXJkLnBsYWNlU2hpcChcclxuICAgICAgICBkcmFnZ2luZ1NoaXAuZGF0YXNldC5zaGlwTmFtZSxcclxuICAgICAgICBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmNvbCksXHJcbiAgICAgICAgcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5yb3cpLFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXJlY3Rpb24tYnV0dG9uJykudGV4dENvbnRlbnQgPT09ICd2ZXJ0aWNhbCdcclxuICAgICAgKTtcclxuICAgICAgaWYgKGFjY2VwdGVkKSB7XHJcbiAgICAgICAgcGxhY2VkU2hpcHMrKztcclxuICAgICAgICByZW5kZXJOZXcoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNpbmctYm9hcmQ+LmJvYXJkJyksIGNvbnN0cnVjdGlvbkJvYXJkKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jaG9vc2VyJykucmVtb3ZlQ2hpbGQoZHJhZ2dpbmdTaGlwKTtcclxuICAgICAgICBpZiAocGxhY2VkU2hpcHMgPT09IFNISVBTLmxlbmd0aCkge1xyXG4gICAgICAgICAgY29uc3QgYiA9IHBsYWNlU2hpcHNGb3JDb21wdXRlcihTSElQUy5tYXAoZSA9PiBlLm5hbWUpKTtcclxuICAgICAgICAgIHByZXBhcmVVSUZvckdhbWUoKTtcclxuICAgICAgICAgIHN0YXJ0R2FtZShjb25zdHJ1Y3Rpb25Cb2FyZCwgYik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGRldlxyXG4gIGJ1dHRvblBsYXkuY2xpY2soKTsgLy8ganVtcHMgcGFzdCBwbGF5IGJ1dHRvbiBieSBwcmVzc2luZyBpdFxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlVUlGb3JHYW1lKCkge1xyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1zaGlwLXBsYWNlcicpKTtcclxuICBjb25zdCBjb250YWluZXJCb2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLWJvYXJkJyk7XHJcbiAgY29udGFpbmVyQm9hcmRzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cclxuICBjb25zdCBjb250YWluZXJHYW1lSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItZ2FtZS1pbmZvJyk7XHJcbiAgY29udGFpbmVyR2FtZUluZm8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblxyXG4gIGNvbnRhaW5lckJvYXJkcy5hcHBlbmRDaGlsZChidWlsZEJvYXJkRWxlbWVudChCT0FSRF9TSVpFLCAwKSk7XHJcbiAgY29udGFpbmVyQm9hcmRzLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmRFbGVtZW50KEJPQVJEX1NJWkUsIDEpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIHZpc3VhbCByZXByZXNlbnRhdGlvbiBvZiBhIEdhbWVib2FyZFxyXG4gKiBAcGFyYW0ge251bWJlcn0gYm9hcmRTaXplIHRoZSBsZW5ndGggb2YgdGhlIGdhbWVib2FyZCBzaWRlc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgaWQgYXR0cmlidXRlIG9mIHRoaXMgSFRNTCBlbGVtZW50XHJcbiAqIEByZXR1cm5zIEhUTUxEaXZFbGVtZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBidWlsZEJvYXJkRWxlbWVudChib2FyZFNpemUsIHBsYXllckluZGV4KSB7XHJcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBib2FyZC5jbGFzc05hbWUgPSAnYm9hcmQnO1xyXG4gIGJvYXJkLmlkID0gKHBsYXllckluZGV4ID09PSAwKSA/ICdwbGF5ZXIxJyA6ICdwbGF5ZXIyJztcclxuICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgYm9hcmRTaXplOyByb3dJbmRleCsrKSB7XHJcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJvdy5jbGFzc05hbWUgPSAncm93JztcclxuICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBib2FyZFNpemU7IGNvbEluZGV4KyspIHtcclxuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHNxdWFyZS5jbGFzc05hbWUgPSAnYm9hcmQgc3F1YXJlJztcclxuICAgICAgc3F1YXJlLmRhdGFzZXQuY29sID0gY29sSW5kZXg7XHJcbiAgICAgIHNxdWFyZS5kYXRhc2V0LnJvdyA9IHJvd0luZGV4O1xyXG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZWwsIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCFlbC5zcmNFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc3RydWNrJykpIHtcclxuICAgICAgICAgIG9uU3F1YXJlQ2xpY2soY29sSW5kZXgsIHJvd0luZGV4LCBwbGF5ZXJJbmRleCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IG1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLW1zZycpO1xyXG4gICAgICAgICAgbXNnLnRleHRDb250ZW50ID0gJ2FscmVhZHkgYXR0YWNrZWQgdGhpcyBzcXVhcmUhJztcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBtc2cudGV4dENvbnRlbnQgPSAnJzsgfSwgMzAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZSk7XHJcbiAgICB9XHJcbiAgICBib2FyZC5hcHBlbmRDaGlsZChyb3cpO1xyXG4gIH1cclxuICByZXR1cm4gYm9hcmQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gdWlFbGVtZW50IFxyXG4gKiBAcGFyYW0ge0dhbWVib2FyZH0gYm9hcmQgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTmV3KHVpRWxlbWVudCwgYm9hcmQpIHtcclxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBib2FyZC5zaXplOyByb3crKykge1xyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgYm9hcmQuc2l6ZTsgY29sKyspIHtcclxuICAgICAgcHJvY2Vzc0JvYXJkU3F1YXJlKFxyXG4gICAgICAgIHVpRWxlbWVudC5jaGlsZE5vZGVzW3Jvd10uY2hpbGROb2Rlc1tjb2xdLFxyXG4gICAgICAgIGJvYXJkLmJvYXJkW3Jvd11bY29sXSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJdGVyYXRlIHRocm91Z2guXHJcbiAqIEBwYXJhbSB7R2FtZURhdGF9IGdhbWVEYXRhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQm9hcmRzKGdhbWVEYXRhKSB7XHJcbiAgLy8gY29uc3QgdWliMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BsYXllcjEnKTtcclxuICAvLyBjb25zdCB1aWIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncGxheWVyMicpO1xyXG5cclxuICAvLyBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBnYW1lRGF0YS5wMS5ib2FyZC5zaXplOyByb3crKykge1xyXG4gIC8vICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgZ2FtZURhdGEucDEuYm9hcmQuc2l6ZTsgY29sKyspIHtcclxuICAvLyAgICAgcHJvY2Vzc0JvYXJkU3F1YXJlKFxyXG4gIC8vICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxJykuY2hpbGROb2Rlc1tyb3ddLmNoaWxkTm9kZXNbY29sXSxcclxuICAvLyAgICAgICBnYW1lRGF0YS5wMS5ib2FyZC5ib2FyZFtyb3ddW2NvbF0sXHJcbiAgLy8gICAgICk7XHJcbiAgLy8gICAgIHByb2Nlc3NCb2FyZFNxdWFyZShcclxuICAvLyAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMicpLmNoaWxkTm9kZXNbcm93XS5jaGlsZE5vZGVzW2NvbF0sXHJcbiAgLy8gICAgICAgZ2FtZURhdGEucDIuYm9hcmQuYm9hcmRbcm93XVtjb2xdLFxyXG4gIC8vICAgICApO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wbGF5ZXI+c3BhbicpLnRleHRDb250ZW50ID0gZ2FtZURhdGEuY3VycmVudFBsYXllciArIDE7XHJcbiAgcmVuZGVyTmV3KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxJyksIGdhbWVEYXRhLnAxLmJvYXJkKTtcclxuICByZW5kZXJOZXcoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjInKSwgZ2FtZURhdGEucDIuYm9hcmQpO1xyXG59XHJcblxyXG4vKipcclxuICAgKiBUYWtlcyBhIHBhaXIgb2YgY29ubmVjdGVkIHNxdWFyZXMuIE9uZSBpcyBhIEhUTUxEaXZFbGVtZW50IGZyb20gdGhlIFVJLCB0aGUgb3RoZXIgaXMgYSBzcXVhcmUgZnJvbSB0aGUgR2FtZWJvYXJkIG9iamVjdCdzXHJcbiAgICogYm9hcmQgcHJvcGVydHkuXHJcbiAgICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gdWlTcXVhcmVcclxuICAgKiBAcGFyYW0ge0JvYXJkUGxhY2VtZW50fSBkYXRhU3F1YXJlXHJcbiAgICovXHJcbmZ1bmN0aW9uIHByb2Nlc3NCb2FyZFNxdWFyZSh1aVNxdWFyZSwgZGF0YVNxdWFyZSkge1xyXG4gIC8vIGlmIHNxdWFyZSBpcyBlbXB0eVxyXG4gIGlmIChkYXRhU3F1YXJlID09PSBudWxsKSB7XHJcbiAgICB1aVNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBpZiBzcXVhcmUgY29udGFpbnMgYSBib2FyZCBwbGFjZW1lbnQgYWthIGEgc2hpcFxyXG4gIGlmICh0eXBlb2YgZGF0YVNxdWFyZSA9PT0gJ29iamVjdCcpIHtcclxuICAgIHVpU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcclxuICAgIGlmIChkYXRhU3F1YXJlLmlzU3RydWNrKCkpIHtcclxuICAgICAgdWlTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3RydWNrJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBpZiBzcXVhcmUgY29udGFpbnMgYSBzdHJpbmcsIGluZGljYXRpbmcgYSBtaXNzXHJcbiAgaWYgKHR5cGVvZiBkYXRhU3F1YXJlID09PSAnc3RyaW5nJykge1xyXG4gICAgdWlTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3RydWNrJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVjbGFyZVdpbm5lcihtZXNzYWdlKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tbXNnJykudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBpbml0aWFsaXplIGZyb20gJy4vdWkuanMnO1xyXG5cclxuaW5pdGlhbGl6ZSgpO1xyXG5cclxuLy8gZnVuY3Rpb24gYmF0dGxlc2hpcHMxKCkge1xyXG5cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gYmF0dGxlc2hpcHMyKCkge1xyXG5cclxuLy8gfVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=