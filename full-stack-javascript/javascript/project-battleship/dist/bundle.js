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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --square-dimension: 45px;\n  --border-color: rgb(160, 151, 247);\n}\n\n/* Board */\n\ndiv.board-container {\n  display: grid;\n  grid-template: 1fr/ repeat(2, 1fr);\n  justify-items: center;\n  align-items: center;\n\n  width: 100%;\n\n  border: 1px solid blueviolet;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  \n  border: 2px solid var(--border-color);\n}\n\n.board>.row {\n  display: flex;\n  flex-direction: row;\n}\n\n/* Board square borders */\n\n.board .square {\n  height: var(--square-dimension);\n  width: var(--square-dimension);\n\n  /* border: 1px solid blue; */\n}\n\n.board.square.ship {\n  background-color: chartreuse;\n}\n\n.board.square.struck-hit {\n  background-color: green;\n}\n\n.board.square.struck-miss {\n  background-color: red;\n}", "",{"version":3,"sources":["webpack://./src/web/styles.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,kCAAkC;AACpC;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,kCAAkC;EAClC,qBAAqB;EACrB,mBAAmB;;EAEnB,WAAW;;EAEX,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA,yBAAyB;;AAEzB;EACE,+BAA+B;EAC/B,8BAA8B;;EAE9B,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":[":root {\n  --square-dimension: 45px;\n  --border-color: rgb(160, 151, 247);\n}\n\n/* Board */\n\ndiv.board-container {\n  display: grid;\n  grid-template: 1fr/ repeat(2, 1fr);\n  justify-items: center;\n  align-items: center;\n\n  width: 100%;\n\n  border: 1px solid blueviolet;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  \n  border: 2px solid var(--border-color);\n}\n\n.board>.row {\n  display: flex;\n  flex-direction: row;\n}\n\n/* Board square borders */\n\n.board .square {\n  height: var(--square-dimension);\n  width: var(--square-dimension);\n\n  /* border: 1px solid blue; */\n}\n\n.board.square.ship {\n  background-color: chartreuse;\n}\n\n.board.square.struck-hit {\n  background-color: green;\n}\n\n.board.square.struck-miss {\n  background-color: red;\n}"],"sourceRoot":""}]);
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

/***/ "./src/obj/Game.js":
/*!*************************!*\
  !*** ./src/obj/Game.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initGame": () => (/* binding */ initGame)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/obj/Player.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ "./src/obj/Gameboard.js");
/* harmony import */ var _web_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web/dom.js */ "./src/web/dom.js");
/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.json */ "./src/obj/settings.json");





let gameData = null;

/**
 * Object that holds game state
 */
function GameData() {
  this.p1 = { player: new _Player__WEBPACK_IMPORTED_MODULE_0__["default"](true), board: new _Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]() };
  this.p2 = { player: new _Player__WEBPACK_IMPORTED_MODULE_0__["default"](false), board: new _Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]() };
  this.currentPlayer = this.p1;
  this.enemyPlayer = this.p2;
}

/**
 * Swaps currentPlayer and enemyPlayer of gameData
 */
GameData.prototype.changePlayer = function changePlayer() {
  const tmp = gameData.currentPlayer;
  gameData.currentPlayer = gameData.enemyPlayer;
  gameData.enemyPlayer = tmp;
};

function initGame() {
  gameData = new GameData();
  placeShipsRandomly();
  (0,_web_dom_js__WEBPACK_IMPORTED_MODULE_2__.renderBoards)(gameData);
}

function round() {

}

function placeShipsRandomly() {
  const { ships } = _settings_json__WEBPACK_IMPORTED_MODULE_3__;
  // eslint-disable-next-line no-restricted-syntax
  let y = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const ship of ships) {
    gameData.p1.board.placeShip(ship.name, 0, y, false);
    gameData.p1.board.receiveAttack(0, y);
    gameData.p2.board.placeShip(ship.name, 0, y, false);
    gameData.p2.board.receiveAttack(0, y);
    y++;
  }
  gameData.p1.board.receiveAttack(9, 9);
  gameData.p2.board.receiveAttack(3, 0);
}

// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/obj/Gameboard.js":
/*!******************************!*\
  !*** ./src/obj/Gameboard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOARD_SIZE": () => (/* binding */ BOARD_SIZE),
/* harmony export */   "BoardPlacement": () => (/* binding */ BoardPlacement),
/* harmony export */   "Coord": () => (/* binding */ Coord),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/obj/Ship.js");
/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.json */ "./src/obj/settings.json");



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

/**
 * Create a coord object that holds x and y numberic values for a board co-ordinate
 * @param {number} x x co-ordinate
 * @param {number} y y co-ordinate
 */
function Coord(x, y) {
  this.x = parseInt(x, 10);
  this.y = parseInt(y, 10);
}

/**
 * An object that records data required for placement onto a square of the Gameboard objects board property
 * @param {Ship} ship
 * @param {number} index
 */
function BoardPlacement(ship, index) {
  this.ship = ship;
  this.shipHullIndex = index;
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
  const shipDetails = determineShipDetails(shipName, new Coord(x, y), vertical);
  if (!shipDetails) return false;
  if (!determineShipOverlap.call(this, shipDetails.coords)) return false;
  let index = 0;
  shipDetails.coords.forEach(e => { this.board[e.y][e.x] = new BoardPlacement(shipDetails.ship, index++); });
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
  if (square === null) {
    this.misses.push(new Coord(x, y));
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
    shipPlacementCoords.push(new Coord(c.x, c.y));
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
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard.js */ "./src/obj/Gameboard.js");
/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.json */ "./src/obj/settings.json");



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
      this.validMoves.push((this.human) ? null : new _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Coord(x, y));
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
/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.json */ "./src/obj/settings.json");


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

/***/ "./src/web/dom.js":
/*!************************!*\
  !*** ./src/web/dom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeDOM": () => (/* binding */ initializeDOM),
/* harmony export */   "renderBoards": () => (/* binding */ renderBoards)
/* harmony export */ });
/* harmony import */ var _obj_settings_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../obj/settings.json */ "./src/obj/settings.json");
/* eslint-disable no-param-reassign */


const BOARD_SIZE = _obj_settings_json__WEBPACK_IMPORTED_MODULE_0__["gameboard-size"];

/**
 * Build Battleships UI
 */
function initializeDOM() {
  // place a couple of test ships
  const container = document.body.querySelector('.board-container');
  container.appendChild(buildBoardElement(BOARD_SIZE, 'boardPlayer'));
  container.appendChild(buildBoardElement(BOARD_SIZE, 'boardComputer'));
}

/**
 * Create a visual representation of a Gameboard
 * @param {number} boardSize the length of the gameboard sides
 * @param {string} id id attribute of this HTML element
 * @returns HTMLDivElement
 */
function buildBoardElement(boardSize, id) {
  const board = document.createElement('div');
  board.className = 'board';
  board.id = id;
  for (let x = 0; x < boardSize; x++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let y = 0; y < boardSize; y++) {
      const square = document.createElement('div');
      square.className = 'board square';
      row.appendChild(square);
    }
    board.appendChild(row);
  }
  return board;
}

/**
 * 
 * @param {GameData} gameData an object that holds game state
 */
function renderBoards(gameData) {
  const data = {
    b1Obj: gameData.p1.board,
    b1Dom: document.querySelector('#boardPlayer'),
    b2Obj: gameData.p2.board,
    b2Dom: document.querySelector('#boardComputer'),
  };

  for (let row = 0; row < data.b1Obj.size; row++) {
    for (let col = 0; col < data.b1Obj.size; col++) {
      data.p1SquareObj = data.b1Obj.board[row][col];
      data.p1SquareDom = data.b1Dom.childNodes[row].childNodes[col];
      data.p2SquareObj = data.b2Obj.board[row][col];
      data.p2SquareDom = data.b2Dom.childNodes[row].childNodes[col];
      humanSquareHandle();
      computerSquareHandle(row, col);
    }
  }

  function humanSquareHandle() {
    data.p1SquareDom.className = 'board square';
    const shipFound = data.p1SquareObj !== null;
    if (shipFound) data.p1SquareDom.classList.add('ship');
    const positionStruck = data.p1SquareObj.ship.hull[data.p1SquareObj.shipHullIndex];

    if (shipFound)
    
    if (shipIsStruck) data.p1SquareDom.classList.add('struck');
  }

  function computerSquareHandle(row, col) {
    data.p2SquareDom.className = 'board square';
    const missAt = data.b2Obj.misses.reduce((prev, cur) => (cur.x === col && cur.y === row) ? true : prev, false);
    // const missAt = b2Obj.misses.indexOf({ x: col, y: row }) !== -1;
    const shipAtStruck = (data.p2SquareObj !== null && data.p2SquareObj.ship.hull[data.p2SquareObj.shipHullIndex] === true);
    if (shipAtStruck) {
      data.p2SquareDom.className = 'board square struck-hit';
    } else if (missAt) {
      data.p2SquareDom.className = 'board square struck-miss';
    } else {
      data.p2SquareDom.className = 'board square';
    }
  }
}

// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/obj/settings.json":
/*!*******************************!*\
  !*** ./src/obj/settings.json ***!
  \*******************************/
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
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/web/dom.js");
/* harmony import */ var _obj_Game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../obj/Game.js */ "./src/obj/Game.js");
/* harmony import */ var _obj_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../obj/Player */ "./src/obj/Player.js");
/* harmony import */ var _obj_Gameboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../obj/Gameboard */ "./src/obj/Gameboard.js");






(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.initializeDOM)();
(0,_obj_Game_js__WEBPACK_IMPORTED_MODULE_2__.initGame)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsNkJBQTZCLHVDQUF1QyxHQUFHLHdDQUF3QyxrQkFBa0IsdUNBQXVDLDBCQUEwQix3QkFBd0Isa0JBQWtCLG1DQUFtQyxHQUFHLFlBQVksa0JBQWtCLDJCQUEyQiw4Q0FBOEMsR0FBRyxpQkFBaUIsa0JBQWtCLHdCQUF3QixHQUFHLGtEQUFrRCxvQ0FBb0MsbUNBQW1DLGlDQUFpQyxLQUFLLHdCQUF3QixpQ0FBaUMsR0FBRyw4QkFBOEIsNEJBQTRCLEdBQUcsK0JBQStCLDBCQUEwQixHQUFHLE9BQU8scUZBQXFGLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxpQ0FBaUMsNkJBQTZCLHVDQUF1QyxHQUFHLHdDQUF3QyxrQkFBa0IsdUNBQXVDLDBCQUEwQix3QkFBd0Isa0JBQWtCLG1DQUFtQyxHQUFHLFlBQVksa0JBQWtCLDJCQUEyQiw4Q0FBOEMsR0FBRyxpQkFBaUIsa0JBQWtCLHdCQUF3QixHQUFHLGtEQUFrRCxvQ0FBb0MsbUNBQW1DLGlDQUFpQyxLQUFLLHdCQUF3QixpQ0FBaUMsR0FBRyw4QkFBOEIsNEJBQTRCLEdBQUcsK0JBQStCLDBCQUEwQixHQUFHLG1CQUFtQjtBQUNqakU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUF1RztBQUN2RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSWlEO0FBQ3pFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjhCO0FBQ007QUFDUztBQUNOOztBQUV2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsWUFBWSwrQ0FBTSxtQkFBbUIsa0RBQVM7QUFDNUQsY0FBYyxZQUFZLCtDQUFNLG9CQUFvQixrREFBUztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFZO0FBQ2Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxVQUFVLFFBQVEsRUFBRSwyQ0FBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRFM7QUFDVTs7QUFFdkM7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw2REFBMEI7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxvQkFBb0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsUUFBUTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx1RUFBdUU7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFVBQVUsV0FBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdEQUFJO0FBQ25CLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoTGlCO0FBQ0E7O0FBRXZDLG1CQUFtQiw2REFBMEI7QUFDN0M7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEMsb0JBQW9CLGdCQUFnQjtBQUNwQyxxREFBcUQsZ0RBQUs7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDaUI7O0FBRXZDO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE1BQU0sbURBQW1ELFlBQVk7QUFDakgsSUFBSTtBQUNKLDRDQUE0QyxNQUFNO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3REFBcUI7QUFDMUM7QUFDQSw4REFBOEQsS0FBSyx1QkFBdUIscURBQWtCLGNBQWM7QUFDMUg7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRHBCO0FBQzRDOztBQUU1QyxtQkFBbUIsaUVBQTBCOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGVBQWU7QUFDakM7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQix1QkFBdUI7QUFDM0Msc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGdCQUFnQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDdUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEZ2QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNtQjtBQUNDO0FBQ1A7QUFDTTs7QUFFekMsc0RBQWE7QUFDYixzREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy93ZWIvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy93ZWIvc3R5bGVzLmNzcz80MzQwIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL29iai9HYW1lLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9vYmovR2FtZWJvYXJkLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9vYmovUGxheWVyLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9vYmovU2hpcC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvd2ViL2RvbS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvd2ViL0NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXNxdWFyZS1kaW1lbnNpb246IDQ1cHg7XFxuICAtLWJvcmRlci1jb2xvcjogcmdiKDE2MCwgMTUxLCAyNDcpO1xcbn1cXG5cXG4vKiBCb2FyZCAqL1xcblxcbmRpdi5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmci8gcmVwZWF0KDIsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVldmlvbGV0O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi5ib2FyZD4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4vKiBCb2FyZCBzcXVhcmUgYm9yZGVycyAqL1xcblxcbi5ib2FyZCAuc3F1YXJlIHtcXG4gIGhlaWdodDogdmFyKC0tc3F1YXJlLWRpbWVuc2lvbik7XFxuICB3aWR0aDogdmFyKC0tc3F1YXJlLWRpbWVuc2lvbik7XFxuXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcbn1cXG5cXG4uYm9hcmQuc3F1YXJlLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTtcXG59XFxuXFxuLmJvYXJkLnNxdWFyZS5zdHJ1Y2staGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uYm9hcmQuc3F1YXJlLnN0cnVjay1taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3dlYi9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtDQUFrQztBQUNwQzs7QUFFQSxVQUFVOztBQUVWO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIsbUJBQW1COztFQUVuQixXQUFXOztFQUVYLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUEseUJBQXlCOztBQUV6QjtFQUNFLCtCQUErQjtFQUMvQiw4QkFBOEI7O0VBRTlCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXNxdWFyZS1kaW1lbnNpb246IDQ1cHg7XFxuICAtLWJvcmRlci1jb2xvcjogcmdiKDE2MCwgMTUxLCAyNDcpO1xcbn1cXG5cXG4vKiBCb2FyZCAqL1xcblxcbmRpdi5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmci8gcmVwZWF0KDIsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVldmlvbGV0O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi5ib2FyZD4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4vKiBCb2FyZCBzcXVhcmUgYm9yZGVycyAqL1xcblxcbi5ib2FyZCAuc3F1YXJlIHtcXG4gIGhlaWdodDogdmFyKC0tc3F1YXJlLWRpbWVuc2lvbik7XFxuICB3aWR0aDogdmFyKC0tc3F1YXJlLWRpbWVuc2lvbik7XFxuXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcbn1cXG5cXG4uYm9hcmQuc3F1YXJlLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTtcXG59XFxuXFxuLmJvYXJkLnNxdWFyZS5zdHJ1Y2staGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uYm9hcmQuc3F1YXJlLnN0cnVjay1taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL0dhbWVib2FyZCc7XG5pbXBvcnQgeyByZW5kZXJCb2FyZHMgfSBmcm9tICcuLi93ZWIvZG9tLmpzJztcbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuL3NldHRpbmdzLmpzb24nO1xuXG5sZXQgZ2FtZURhdGEgPSBudWxsO1xuXG4vKipcbiAqIE9iamVjdCB0aGF0IGhvbGRzIGdhbWUgc3RhdGVcbiAqL1xuZnVuY3Rpb24gR2FtZURhdGEoKSB7XG4gIHRoaXMucDEgPSB7IHBsYXllcjogbmV3IFBsYXllcih0cnVlKSwgYm9hcmQ6IG5ldyBHYW1lYm9hcmQoKSB9O1xuICB0aGlzLnAyID0geyBwbGF5ZXI6IG5ldyBQbGF5ZXIoZmFsc2UpLCBib2FyZDogbmV3IEdhbWVib2FyZCgpIH07XG4gIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucDE7XG4gIHRoaXMuZW5lbXlQbGF5ZXIgPSB0aGlzLnAyO1xufVxuXG4vKipcbiAqIFN3YXBzIGN1cnJlbnRQbGF5ZXIgYW5kIGVuZW15UGxheWVyIG9mIGdhbWVEYXRhXG4gKi9cbkdhbWVEYXRhLnByb3RvdHlwZS5jaGFuZ2VQbGF5ZXIgPSBmdW5jdGlvbiBjaGFuZ2VQbGF5ZXIoKSB7XG4gIGNvbnN0IHRtcCA9IGdhbWVEYXRhLmN1cnJlbnRQbGF5ZXI7XG4gIGdhbWVEYXRhLmN1cnJlbnRQbGF5ZXIgPSBnYW1lRGF0YS5lbmVteVBsYXllcjtcbiAgZ2FtZURhdGEuZW5lbXlQbGF5ZXIgPSB0bXA7XG59O1xuXG5mdW5jdGlvbiBpbml0R2FtZSgpIHtcbiAgZ2FtZURhdGEgPSBuZXcgR2FtZURhdGEoKTtcbiAgcGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gIHJlbmRlckJvYXJkcyhnYW1lRGF0YSk7XG59XG5cbmZ1bmN0aW9uIHJvdW5kKCkge1xuXG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcbiAgY29uc3QgeyBzaGlwcyB9ID0gc2V0dGluZ3M7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICBsZXQgeSA9IDA7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICBnYW1lRGF0YS5wMS5ib2FyZC5wbGFjZVNoaXAoc2hpcC5uYW1lLCAwLCB5LCBmYWxzZSk7XG4gICAgZ2FtZURhdGEucDEuYm9hcmQucmVjZWl2ZUF0dGFjaygwLCB5KTtcbiAgICBnYW1lRGF0YS5wMi5ib2FyZC5wbGFjZVNoaXAoc2hpcC5uYW1lLCAwLCB5LCBmYWxzZSk7XG4gICAgZ2FtZURhdGEucDIuYm9hcmQucmVjZWl2ZUF0dGFjaygwLCB5KTtcbiAgICB5Kys7XG4gIH1cbiAgZ2FtZURhdGEucDEuYm9hcmQucmVjZWl2ZUF0dGFjayg5LCA5KTtcbiAgZ2FtZURhdGEucDIuYm9hcmQucmVjZWl2ZUF0dGFjaygzLCAwKTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCB7IGluaXRHYW1lIH07XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAuanMnO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4vc2V0dGluZ3MuanNvbic7XG5cbi8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIENPTlNUQU5UU1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuY29uc3QgQk9BUkRfU0laRSA9IHNldHRpbmdzWydnYW1lYm9hcmQtc2l6ZSddO1xuXG4vKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBDT05TVFJVQ1RPUlNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi8qKlxuICogQ3JlYXRlIGEgR2FtZWJvYXJkIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXIgfCB1bmRlZmluZWR9IHNpemUgZGVmYXVsdHMgdG8gMTAgYnV0IGNhbiBiZSBzZXQgbWFudWFsbHlcbiAqL1xuZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICB0aGlzLnNpemUgPSBCT0FSRF9TSVpFO1xuICB0aGlzLmJvYXJkID0gbmV3IEFycmF5KHRoaXMuc2l6ZSkuZmlsbChudWxsKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5ib2FyZFtpXSA9IG5ldyBBcnJheSh0aGlzLnNpemUpLmZpbGwobnVsbCk7XG4gIH1cbiAgdGhpcy5taXNzZXMgPSBbXTtcbiAgdGhpcy5zaGlwcyA9IFtdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNvb3JkIG9iamVjdCB0aGF0IGhvbGRzIHggYW5kIHkgbnVtYmVyaWMgdmFsdWVzIGZvciBhIGJvYXJkIGNvLW9yZGluYXRlXG4gKiBAcGFyYW0ge251bWJlcn0geCB4IGNvLW9yZGluYXRlXG4gKiBAcGFyYW0ge251bWJlcn0geSB5IGNvLW9yZGluYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDb29yZCh4LCB5KSB7XG4gIHRoaXMueCA9IHBhcnNlSW50KHgsIDEwKTtcbiAgdGhpcy55ID0gcGFyc2VJbnQoeSwgMTApO1xufVxuXG4vKipcbiAqIEFuIG9iamVjdCB0aGF0IHJlY29yZHMgZGF0YSByZXF1aXJlZCBmb3IgcGxhY2VtZW50IG9udG8gYSBzcXVhcmUgb2YgdGhlIEdhbWVib2FyZCBvYmplY3RzIGJvYXJkIHByb3BlcnR5XG4gKiBAcGFyYW0ge1NoaXB9IHNoaXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICovXG5leHBvcnQgZnVuY3Rpb24gQm9hcmRQbGFjZW1lbnQoc2hpcCwgaW5kZXgpIHtcbiAgdGhpcy5zaGlwID0gc2hpcDtcbiAgdGhpcy5zaGlwSHVsbEluZGV4ID0gaW5kZXg7XG59XG5cbi8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1FVEhPRFNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi8qKlxuICogUGxhY2UgYSBzaGlwIG9uIHRoZSBib2FyZFxuICogQHBhcmFtIHtTaGlwfSBzaGlwTmFtZSBhIFNoaXAgb2JqZWN0XG4gKiBAcGFyYW0ge251bWJlcn0geCB4IGNvLW9yZGluYXRlXG4gKiBAcGFyYW0ge251bWJlcn0geSB5IGNvLW9yZGluYXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIGEgYm9vbGVhbiwgdHJ1ZSBpZiB2ZXJ0aWNhbCwgZmFsc2UgaWYgaG9yaXpvbnRhbFxuICovXG5HYW1lYm9hcmQucHJvdG90eXBlLnBsYWNlU2hpcCA9IGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwTmFtZSwgeCwgeSwgdmVydGljYWwpIHtcbiAgY29uc3Qgc2hpcERldGFpbHMgPSBkZXRlcm1pbmVTaGlwRGV0YWlscyhzaGlwTmFtZSwgbmV3IENvb3JkKHgsIHkpLCB2ZXJ0aWNhbCk7XG4gIGlmICghc2hpcERldGFpbHMpIHJldHVybiBmYWxzZTtcbiAgaWYgKCFkZXRlcm1pbmVTaGlwT3ZlcmxhcC5jYWxsKHRoaXMsIHNoaXBEZXRhaWxzLmNvb3JkcykpIHJldHVybiBmYWxzZTtcbiAgbGV0IGluZGV4ID0gMDtcbiAgc2hpcERldGFpbHMuY29vcmRzLmZvckVhY2goZSA9PiB7IHRoaXMuYm9hcmRbZS55XVtlLnhdID0gbmV3IEJvYXJkUGxhY2VtZW50KHNoaXBEZXRhaWxzLnNoaXAsIGluZGV4KyspOyB9KTtcbiAgdGhpcy5zaGlwcy5wdXNoKHNoaXBEZXRhaWxzLnNoaXApO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogUmVjZWl2ZSBhbiBhdHRhY2suIFRoZSBhdHRhY2sgd2lsbCBlaXRoZXIgaGl0IGEgc2hpcCwgaW4gd2hpY2ggY2FzZSB0aGF0IHNoaXAgcmVjb3JkcyBhIGhpdCBhdCB0aGF0IHBvc2l0aW9uO1xuICogb3IgdGhlIGF0dGFjayB3aWxsIG1pc3MsIGluIHdoaWNoIGNhc2UgaXQgaXMgcmVjb3JkZWQgaW4gdGhlIG1pc3NlcyBhcnJheVxuICogQHBhcmFtIHtudW1iZXJ9IHggeCBjby1vcmRpbmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHkgeSBjby1vcmRpbmF0ZVxuICogQHJldHVybnMgdHJ1ZSBpZiBhdHRhY2sgd2FzIHN1Y2Nlc3NmdWwsIGZhbHNlIGlmIGF0dGFjayB3YXMgYSBtaXNzXG4gKi9cbkdhbWVib2FyZC5wcm90b3R5cGUucmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXRlbXBsYXRlXG4gIC8vIGNvbnNvbGUubG9nKCd4IGFuZCB5OicgKyB4ICsgJyAnICsgeSk7XG4gIC8vIGNvbnNvbGUubG9nKHRoaXMuYm9hcmRbeV0pO1xuICBjb25zdCBzcXVhcmUgPSB0aGlzLmJvYXJkW3ldW3hdO1xuICBpZiAoc3F1YXJlID09PSBudWxsKSB7XG4gICAgdGhpcy5taXNzZXMucHVzaChuZXcgQ29vcmQoeCwgeSkpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzcXVhcmUuc2hpcC5oaXQoc3F1YXJlLnNoaXBIdWxsSW5kZXgpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYWxsIHNoaXBzIG9uIHRoZSBib2FyZCBhcmUgc3Vua1xuICogQHJldHVybnMgdHJ1ZSBpZiBhbGwgc3Vua3MgYXJlIHN1bmssIGFuZCBmYWxzZSBpZiB0aGV5IGFyZSBub3RcbiAqL1xuR2FtZWJvYXJkLnByb3RvdHlwZS5hbGxTdW5rID0gZnVuY3Rpb24gYWxsU3VuaygpIHtcbiAgcmV0dXJuIHRoaXMuc2hpcHMucmVkdWNlKChwcmV2LCBjdXIpID0+IHtcbiAgICBpZiAoIWN1ci5pc1N1bmsoKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBwcmV2O1xuICB9LCB0cnVlKTtcbn07XG5cbi8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEhFTFBFUiBGVU5DVElPTlNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi8qKlxuICogIERldGVybWluZXMgaWYgYSBzaGlwcyBwbGFjZW1lbnQgaXMgYWNjZXB0YWJsZSBpbiB0aGF0IGl0IGRvZXMgbm90IG92ZXJsYXAgYW5vdGhlciBzaGlwLlxuICogQHBhcmFtIHtDb29yZFtdfSBzaGlwQ29vcmRzIHNoaXAgY29vcmRzIHRvIGNoZWNrXG4gKiBAdGhpcyB7R2FtZWJvYXJkfSB0aGlzIGZ1bmN0aW9uIG11c3QgaGF2ZSBpdHMgY29udGV4dC8gdGhpcyBzZXQgdG8gYSBnYW1lYm9hcmQgb2JqZWN0XG4gKiBAcmV0dXJuIGEgYm9vbGVhbiByZXByZXNlbnRpbmcgaWYgdGhpcyBzaGlwIHBsYWNlbWVudCBpcyB2YWxpZCwgaW4gdGhhdCBpdCBkb2VzIG5vdCBvdmVybGFwIGFub3RoZXIgc2hpcFxuICovXG5mdW5jdGlvbiBkZXRlcm1pbmVTaGlwT3ZlcmxhcChzaGlwQ29vcmRzKSB7XG4gIGxldCBvdmVybGFwRm91bmQgPSBmYWxzZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuYm9hcmRbc2hpcENvb3Jkc1tpXS55XVtzaGlwQ29vcmRzW2ldLnhdICE9PSBudWxsKSB7XG4gICAgICBvdmVybGFwRm91bmQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiAhb3ZlcmxhcEZvdW5kO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgc2hpcCBkZXRhaWxzLiBUaGF0IGlzLCB0aGUgcmVzb2x2ZXMgdGhlIHNoaXBOYW1lIHRvIGEgU2hpcCBvYmplY3QsIGFuZCBkZXRlcm1pbmVzIGFsbCB0aGUgY29vcmRpbmF0ZXMgb24gdGhlIGJvYXJkIHRoZSBTaGlwXG4gKiB3b3VsZCBpbmhhYml0LCB0YWtpbmcgaW50byBjb25zaWRlcmF0aW9uIGl0cyBvcmllbnRhdGlvbiB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseVxuICogQHBhcmFtIHtzdHJpbmd9IHNoaXBOYW1lIG5hbWUgb2Ygc2hpcCB0eXBlXG4gKiBAcGFyYW0ge0Nvb3JkfSBzZWxlY3RlZENvb3JkIENvb3JkIG9iamVjdFxuICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCB2ZXJ0aWNhbCBpZiB0cnVlLCBob3Jpem9udGFsIGlmIGZhbHNlXG4gKiBAcmV0dXJucyBmYWxzZSBpZiBpbnZhbGlkLCBzaGlwIHBsYWNlbWVudCBkZXRhaWxzIGlmIHZhbGlkLlxuICovXG5mdW5jdGlvbiBkZXRlcm1pbmVTaGlwRGV0YWlscyhzaGlwTmFtZSwgc2VsZWN0ZWRDb29yZCwgdmVydGljYWwpIHtcbiAgLy8gdmFsaWRhdGUgc3RhcnQgY29vcmRzXG4gIGlmICghdmFsaWRhdGVDb29yZHMoc2VsZWN0ZWRDb29yZCkpIHJldHVybiBmYWxzZTtcblxuICAvLyB2YWxpZGF0ZSBzaGlwIG5hbWUgYW5kIGluc3RhbnRpYXRlIHNoaXBcbiAgbGV0IHNoaXA7XG4gIHRyeSB7XG4gICAgc2hpcCA9IG5ldyBTaGlwKHNoaXBOYW1lKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgYyA9IHNlbGVjdGVkQ29vcmQ7XG4gIGNvbnN0IHNoaXBQbGFjZW1lbnRDb29yZHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmh1bGwubGVuZ3RoOyBpKyspIHtcbiAgICBzaGlwUGxhY2VtZW50Q29vcmRzLnB1c2gobmV3IENvb3JkKGMueCwgYy55KSk7XG4gICAgaWYgKHZlcnRpY2FsKSBjLnkrKztcbiAgICBlbHNlIGMueCsrO1xuICB9XG5cbiAgLy8gdmFsaWRhdGUgZW5kIGNvb3Jkc1xuICBpZiAoIXZhbGlkYXRlQ29vcmRzKHNoaXBQbGFjZW1lbnRDb29yZHMuYXQoLTEpKSkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIHJldHVybiBzaGlwIHBsYWNlbWVudCBkZXRhaWxzXG4gIHJldHVybiB7XG4gICAgc2hpcCxcbiAgICBjb29yZHM6IHNoaXBQbGFjZW1lbnRDb29yZHMsXG4gIH07XG59XG5cbi8qKlxuICogVmFsaWRhdGUgYmFzaWMgY29vcmQgdmFsdWVzLlxuICogQHBhcmFtIHtDb29yZH0gY29vcmRzIG9iamVjdCBsaXRlcmFsIGNvbnRhaW5pbmcgeCBhbmQgeSBwcm9wZXJ0aWVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBjb29yZHMgYXJlIHZhbGlkLCBmYWxzZSBpZiBpbnZhbGlkXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlQ29vcmRzKGNvb3Jkcykge1xuICBpZiAodHlwZW9mIGNvb3Jkcy54ICE9PSAnbnVtYmVyJ1xuICAgIHx8IHR5cGVvZiBjb29yZHMueSAhPT0gJ251bWJlcidcbiAgICB8fCBjb29yZHMueCA8IDBcbiAgICB8fCBjb29yZHMueSA8IDBcbiAgICB8fCBjb29yZHMueCA+PSBCT0FSRF9TSVpFXG4gICAgfHwgY29vcmRzLnkgPj0gQk9BUkRfU0laRSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuZXhwb3J0IHsgQk9BUkRfU0laRSB9O1xuIiwiaW1wb3J0IHsgQ29vcmQgfSBmcm9tICcuL0dhbWVib2FyZC5qcyc7XG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncy5qc29uJztcblxuY29uc3QgQk9BUkRfU0laRSA9IHNldHRpbmdzWydnYW1lYm9hcmQtc2l6ZSddO1xuLyoqXG4gKiBDcmVhdGUgYSBwbGF5ZXIgb2JqZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGh1bWFuIHRydWUgaWYgdGhpcyBpcyBhIGh1bWFuIHBsYXllciwgZmFsc2UgaWYgaXQgaXMgYSBjb21wdXRlciBwbGF5ZXJcbiAqL1xuZnVuY3Rpb24gUGxheWVyKGh1bWFuKSB7XG4gIHRoaXMuaHVtYW4gPSBodW1hbjtcbiAgdGhpcy52YWxpZE1vdmVzID0gW107XG4gIGZvciAobGV0IHggPSAwOyB4IDwgQk9BUkRfU0laRTsgeCsrKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBCT0FSRF9TSVpFOyB5KyspIHtcbiAgICAgIHRoaXMudmFsaWRNb3Zlcy5wdXNoKCh0aGlzLmh1bWFuKSA/IG51bGwgOiBuZXcgQ29vcmQoeCwgeSkpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBJZiB0aGlzIFBsYXllciBpcyBodW1hbiwgdGhlbiByZXR1cm4gbnVsbC5cbiAqIElmIHRoaXMgcGxheWVyIGlzIGNvbXB1dGVyLCBzZWxlY3QgYSByYW5kb20gdmFsaWRNb3ZlIGFuZCByZXR1cm4gaXQuXG4gKiBJbiBlaXRoZXIgY2FzZSwgdGhlIG51bWJlciBvZiB2YWxpZE1vdmVzIGlzIHJlZHVjZWQgYnkgMS5cbiAqIEByZXR1cm5zIG51bGwgZm9yIGh1bWFuIHBsYXllcnMsIGFuZCBhIENvb3JkIG9iamVjdCBmb3IgY29tcHV0ZXJzXG4gKiBAdGhyb3cgaWYgdmFsaWRNb3Zlcy5sZW5ndGggaXMgMC5cbiAqL1xuUGxheWVyLnByb3RvdHlwZS5hdHRhY2sgPSBmdW5jdGlvbiBhdHRhY2soKSB7XG4gIGlmICh0aGlzLnZhbGlkTW92ZXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAodGhpcy5odW1hbilcbiAgICAgID8gdGhpcy52YWxpZE1vdmVzLnBvcCgpXG4gICAgICA6IHRoaXMudmFsaWRNb3Zlcy5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy52YWxpZE1vdmVzLmxlbmd0aCksIDEpLmF0KDApO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcignbm8gdmFsaWQgbW92ZXMgcmVtYWluaW5nJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJpbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncy5qc29uJztcblxuLyoqXG4gKiBDcmVhdGUgYSBzaGlwIG9iamVjdCwgYnkgc3BlY2lmeWluZyB0aGUgbmFtZSBvZiB0aGUgc2hpcCByZXF1aXJlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzaGlwIG5hbWUgb2Ygc2hpcCwgY29ycmVzcG9uZHMgdG8gYSBsZW5ndGguXG4gKi9cbmZ1bmN0aW9uIFNoaXAoc2hpcCkge1xuICB0aGlzLmxlbmd0aCA9IHZhbGlkYXRlU2hpcChzaGlwKTtcbiAgdGhpcy5uYW1lID0gc2hpcDtcbiAgdGhpcy5odWxsID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKS5maWxsKGZhbHNlKTtcbn1cblxuLyoqXG4gKiAnaGl0JyAvIGF0dGFjayB0aGlzIHNoaXAgYXQgc3BlY2lmaWVkIGluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb24gdGhlIHplcm8taW5kZXhlZCBwb3NpdG9uIG9mIHRoaXMgc2hpcHMgaHVsbCB0byByZWNvcmQgYSBoaXRcbiAqL1xuU2hpcC5wcm90b3R5cGUuaGl0ID0gZnVuY3Rpb24gaGl0KGluZGV4KSB7XG4gIGlmIChpbmRleCA+PSB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgc3BlY2lmaWVkIGhpdCBpbmRleCBcIiR7aW5kZXh9XCIgaXMgZ3JlYXRlciB0aGFuIGFsbG93YWJsZSBmb3IgYSBzaGlwIG9mIGxlbmd0aCAke3RoaXMubGVuZ3RofS5gKTtcbiAgfSBlbHNlIGlmIChpbmRleCA8IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHNwZWNpZmllZCBoaXQgaW5kZXggXCIke2luZGV4fVwiIGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgfVxuICB0aGlzLmh1bGxbaW5kZXhdID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzaGlwIGhhcyBzdW5rLCB0aGF0IGlzLCBpdCdzIGh1bGwgaGFzIGJlZW4gaGl0IGF0IGVhY2ggcG9zaXRpb25cbiAqIEByZXR1cm5zIHtib29sZWFufSByZXByZXNlbnRpbmcgaWYgdGhpcyBzaGlwIGhhcyBiZWVuIHN1bmtcbiAqL1xuU2hpcC5wcm90b3R5cGUuaXNTdW5rID0gZnVuY3Rpb24gaXNTdW5rKCkge1xuICByZXR1cm4gdGhpcy5odWxsLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gY3VycmVudCA9PT0gZmFsc2UgPyBmYWxzZSA6IHByZXYsIHRydWUpO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgdGhlIGxlbmd0aCBvZiBhIHNoaXAsIGJ5IGl0J3MgbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHNoaXAgYSBuYW1lIG9mIGEgc2hpcFxuICogQHJldHVybnMgdGhlIGxlbmd0aCBvZiBzYWlkIHNoaXBcbiAqIEB0aHJvd3MgRXJyb3IgaWYgc2hpcCBuYW1lIG5vdCByZWNvZ25pc2VkXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlU2hpcChzaGlwKSB7XG4gIC8vIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwc1R5cGVzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gKGN1cnJlbnQubmFtZSA9PT0gc2hpcCkgPyBjdXJyZW50Lmxlbmd0aCA6IHByZXYsIG51bGwpO1xuICBjb25zdCBzaGlwTGVuZ3RoID0gc2V0dGluZ3Muc2hpcHMucmVkdWNlKChwcmV2LCBjdXIpID0+IChjdXIubmFtZSA9PT0gc2hpcCkgPyBjdXIuc2l6ZSA6IHByZXYsIG51bGwpO1xuICBpZiAoc2hpcExlbmd0aCA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgc2hpcCBwYXJhbWV0ZXIgc3RyaW5nIG5vdCByZWNvZ25pc2VkOiBcIiR7c2hpcH1cIi4gQWxsb3dhYmxlIHZhbHVlczogJHtzZXR0aW5ncy5zaGlwcy5tYXAoZSA9PiBlLm5hbWUpfWApO1xuICB9XG4gIHJldHVybiBzaGlwTGVuZ3RoO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuLi9vYmovc2V0dGluZ3MuanNvbic7XG5cbmNvbnN0IEJPQVJEX1NJWkUgPSBzZXR0aW5nc1snZ2FtZWJvYXJkLXNpemUnXTtcblxuLyoqXG4gKiBCdWlsZCBCYXR0bGVzaGlwcyBVSVxuICovXG5mdW5jdGlvbiBpbml0aWFsaXplRE9NKCkge1xuICAvLyBwbGFjZSBhIGNvdXBsZSBvZiB0ZXN0IHNoaXBzXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmJvYXJkLWNvbnRhaW5lcicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZEVsZW1lbnQoQk9BUkRfU0laRSwgJ2JvYXJkUGxheWVyJykpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZEVsZW1lbnQoQk9BUkRfU0laRSwgJ2JvYXJkQ29tcHV0ZXInKSk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgdmlzdWFsIHJlcHJlc2VudGF0aW9uIG9mIGEgR2FtZWJvYXJkXG4gKiBAcGFyYW0ge251bWJlcn0gYm9hcmRTaXplIHRoZSBsZW5ndGggb2YgdGhlIGdhbWVib2FyZCBzaWRlc1xuICogQHBhcmFtIHtzdHJpbmd9IGlkIGlkIGF0dHJpYnV0ZSBvZiB0aGlzIEhUTUwgZWxlbWVudFxuICogQHJldHVybnMgSFRNTERpdkVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gYnVpbGRCb2FyZEVsZW1lbnQoYm9hcmRTaXplLCBpZCkge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZC5jbGFzc05hbWUgPSAnYm9hcmQnO1xuICBib2FyZC5pZCA9IGlkO1xuICBmb3IgKGxldCB4ID0gMDsgeCA8IGJvYXJkU2l6ZTsgeCsrKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgYm9hcmRTaXplOyB5KyspIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3F1YXJlLmNsYXNzTmFtZSA9ICdib2FyZCBzcXVhcmUnO1xuICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbiAgcmV0dXJuIGJvYXJkO1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtHYW1lRGF0YX0gZ2FtZURhdGEgYW4gb2JqZWN0IHRoYXQgaG9sZHMgZ2FtZSBzdGF0ZVxuICovXG5mdW5jdGlvbiByZW5kZXJCb2FyZHMoZ2FtZURhdGEpIHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBiMU9iajogZ2FtZURhdGEucDEuYm9hcmQsXG4gICAgYjFEb206IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2FyZFBsYXllcicpLFxuICAgIGIyT2JqOiBnYW1lRGF0YS5wMi5ib2FyZCxcbiAgICBiMkRvbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvYXJkQ29tcHV0ZXInKSxcbiAgfTtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBkYXRhLmIxT2JqLnNpemU7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgZGF0YS5iMU9iai5zaXplOyBjb2wrKykge1xuICAgICAgZGF0YS5wMVNxdWFyZU9iaiA9IGRhdGEuYjFPYmouYm9hcmRbcm93XVtjb2xdO1xuICAgICAgZGF0YS5wMVNxdWFyZURvbSA9IGRhdGEuYjFEb20uY2hpbGROb2Rlc1tyb3ddLmNoaWxkTm9kZXNbY29sXTtcbiAgICAgIGRhdGEucDJTcXVhcmVPYmogPSBkYXRhLmIyT2JqLmJvYXJkW3Jvd11bY29sXTtcbiAgICAgIGRhdGEucDJTcXVhcmVEb20gPSBkYXRhLmIyRG9tLmNoaWxkTm9kZXNbcm93XS5jaGlsZE5vZGVzW2NvbF07XG4gICAgICBodW1hblNxdWFyZUhhbmRsZSgpO1xuICAgICAgY29tcHV0ZXJTcXVhcmVIYW5kbGUocm93LCBjb2wpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGh1bWFuU3F1YXJlSGFuZGxlKCkge1xuICAgIGRhdGEucDFTcXVhcmVEb20uY2xhc3NOYW1lID0gJ2JvYXJkIHNxdWFyZSc7XG4gICAgY29uc3Qgc2hpcEZvdW5kID0gZGF0YS5wMVNxdWFyZU9iaiAhPT0gbnVsbDtcbiAgICBpZiAoc2hpcEZvdW5kKSBkYXRhLnAxU3F1YXJlRG9tLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICBjb25zdCBwb3NpdGlvblN0cnVjayA9IGRhdGEucDFTcXVhcmVPYmouc2hpcC5odWxsW2RhdGEucDFTcXVhcmVPYmouc2hpcEh1bGxJbmRleF07XG5cbiAgICBpZiAoc2hpcEZvdW5kKVxuICAgIFxuICAgIGlmIChzaGlwSXNTdHJ1Y2spIGRhdGEucDFTcXVhcmVEb20uY2xhc3NMaXN0LmFkZCgnc3RydWNrJyk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlclNxdWFyZUhhbmRsZShyb3csIGNvbCkge1xuICAgIGRhdGEucDJTcXVhcmVEb20uY2xhc3NOYW1lID0gJ2JvYXJkIHNxdWFyZSc7XG4gICAgY29uc3QgbWlzc0F0ID0gZGF0YS5iMk9iai5taXNzZXMucmVkdWNlKChwcmV2LCBjdXIpID0+IChjdXIueCA9PT0gY29sICYmIGN1ci55ID09PSByb3cpID8gdHJ1ZSA6IHByZXYsIGZhbHNlKTtcbiAgICAvLyBjb25zdCBtaXNzQXQgPSBiMk9iai5taXNzZXMuaW5kZXhPZih7IHg6IGNvbCwgeTogcm93IH0pICE9PSAtMTtcbiAgICBjb25zdCBzaGlwQXRTdHJ1Y2sgPSAoZGF0YS5wMlNxdWFyZU9iaiAhPT0gbnVsbCAmJiBkYXRhLnAyU3F1YXJlT2JqLnNoaXAuaHVsbFtkYXRhLnAyU3F1YXJlT2JqLnNoaXBIdWxsSW5kZXhdID09PSB0cnVlKTtcbiAgICBpZiAoc2hpcEF0U3RydWNrKSB7XG4gICAgICBkYXRhLnAyU3F1YXJlRG9tLmNsYXNzTmFtZSA9ICdib2FyZCBzcXVhcmUgc3RydWNrLWhpdCc7XG4gICAgfSBlbHNlIGlmIChtaXNzQXQpIHtcbiAgICAgIGRhdGEucDJTcXVhcmVEb20uY2xhc3NOYW1lID0gJ2JvYXJkIHNxdWFyZSBzdHJ1Y2stbWlzcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEucDJTcXVhcmVEb20uY2xhc3NOYW1lID0gJ2JvYXJkIHNxdWFyZSc7XG4gICAgfVxuICB9XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBpbml0aWFsaXplRE9NLCByZW5kZXJCb2FyZHMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGluaXRpYWxpemVET00gfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBpbml0R2FtZSB9IGZyb20gJy4uL29iai9HYW1lLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vb2JqL1BsYXllcic7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4uL29iai9HYW1lYm9hcmQnO1xuXG5pbml0aWFsaXplRE9NKCk7XG5pbml0R2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9