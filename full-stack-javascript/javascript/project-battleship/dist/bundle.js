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
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/obj/Gameboard.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/obj/Player.js");
/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.json */ "./src/obj/settings.json");
/* harmony import */ var _web_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web/dom.js */ "./src/web/dom.js");
/**
one player take turn
  chose a spot to attack enemy gameboard, that has not been previously attacked
    if a hit
      mark square as hit
    if a miss mark square as a miss
if ship sunk mark as such
if all ships sunk game over
*/




// eslint-disable-next-line import/named


async function startGame() {
  // instantiate game objects
  const gameData = [
    { player: new _Player__WEBPACK_IMPORTED_MODULE_1__["default"](true), board: new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]() },
    { player: new _Player__WEBPACK_IMPORTED_MODULE_1__["default"](false), board: new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]() },
  ];
  let currentPlayer = 0;
  let enemyPlayer = 1;

  placeShipsRandomly();
  (0,_web_dom_js__WEBPACK_IMPORTED_MODULE_3__.renderBoards)(gameData);

  while (validMovesRemaining(gameData)) {
    const attackMove = await getAttackCoords(gameData[currentPlayer].player);
    gameData[enemyPlayer].board.receiveAttack(attackMove.x, attackMove.y);
    (0,_web_dom_js__WEBPACK_IMPORTED_MODULE_3__.renderBoards)(gameData);
    switchPlayer();
  }

  function switchPlayer() {
    const tmp = currentPlayer;
    currentPlayer = enemyPlayer;
    enemyPlayer = tmp;
  }

  function placeShipsRandomly() {
    const { ships } = _settings_json__WEBPACK_IMPORTED_MODULE_2__;
    // eslint-disable-next-line no-restricted-syntax
    let y = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const ship of ships) {
      gameData[0].board.placeShip(ship.name, 0, y, false);
      gameData[0].board.receiveAttack(0, y);
      gameData[1].board.placeShip(ship.name, 0, y, false);
      gameData[1].board.receiveAttack(0, y);
      y++;
    }
    gameData[0].board.receiveAttack(9, 9);
    gameData[1].board.receiveAttack(3, 0);
  }
}

function validMovesRemaining(gameData) {
  // return false;
  // eslint-disable-next-line no-unreachable
  return gameData[0].player.validMoves.length > 0 && gameData[1].player.validMoves.length > 0;
}

async function getAttackCoords(player) {
  let attack = player.attack();
  if (attack === null) {
    attack = { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10) };
  }
  return attack;
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

function renderBoards(gameData) {
  const data = {
    b1Obj: gameData[0].board,
    b1Dom: document.querySelector('#boardPlayer'),
    b2Obj: gameData[1].board,
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
    if (data.p1SquareObj === null) {
      data.p1SquareDom.className = 'board square';
    } else {
      data.p1SquareDom.className = 'board square ship';
    }
  }

  function computerSquareHandle(row, col) {
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
(0,_obj_Game_js__WEBPACK_IMPORTED_MODULE_2__.startGame)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3dlYi9zdHlsZXMuY3NzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3dlYi9zdHlsZXMuY3NzPzQzNDAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL0dhbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL29iai9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL29iai9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL29iai9TaGlwLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy93ZWIvZG9tLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy93ZWIvQ29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tc3F1YXJlLWRpbWVuc2lvbjogNDVweDtcXG4gIC0tYm9yZGVyLWNvbG9yOiByZ2IoMTYwLCAxNTEsIDI0Nyk7XFxufVxcblxcbi8qIEJvYXJkICovXFxuXFxuZGl2LmJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyLyByZXBlYXQoMiwgMWZyKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWV2aW9sZXQ7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIFxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLmJvYXJkPi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi8qIEJvYXJkIHNxdWFyZSBib3JkZXJzICovXFxuXFxuLmJvYXJkIC5zcXVhcmUge1xcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXG4gIHdpZHRoOiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXG5cXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxufVxcblxcbi5ib2FyZC5zcXVhcmUuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xcbn1cXG5cXG4uYm9hcmQuc3F1YXJlLnN0cnVjay1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5ib2FyZC5zcXVhcmUuc3RydWNrLW1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvd2ViL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsa0NBQWtDO0FBQ3BDOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixtQkFBbUI7O0VBRW5CLFdBQVc7O0VBRVgsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0UsK0JBQStCO0VBQy9CLDhCQUE4Qjs7RUFFOUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tc3F1YXJlLWRpbWVuc2lvbjogNDVweDtcXG4gIC0tYm9yZGVyLWNvbG9yOiByZ2IoMTYwLCAxNTEsIDI0Nyk7XFxufVxcblxcbi8qIEJvYXJkICovXFxuXFxuZGl2LmJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyLyByZXBlYXQoMiwgMWZyKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWV2aW9sZXQ7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIFxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLmJvYXJkPi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi8qIEJvYXJkIHNxdWFyZSBib3JkZXJzICovXFxuXFxuLmJvYXJkIC5zcXVhcmUge1xcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXG4gIHdpZHRoOiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXG5cXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxufVxcblxcbi5ib2FyZC5zcXVhcmUuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xcbn1cXG5cXG4uYm9hcmQuc3F1YXJlLnN0cnVjay1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5ib2FyZC5zcXVhcmUuc3RydWNrLW1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyoqXG5vbmUgcGxheWVyIHRha2UgdHVyblxuICBjaG9zZSBhIHNwb3QgdG8gYXR0YWNrIGVuZW15IGdhbWVib2FyZCwgdGhhdCBoYXMgbm90IGJlZW4gcHJldmlvdXNseSBhdHRhY2tlZFxuICAgIGlmIGEgaGl0XG4gICAgICBtYXJrIHNxdWFyZSBhcyBoaXRcbiAgICBpZiBhIG1pc3MgbWFyayBzcXVhcmUgYXMgYSBtaXNzXG5pZiBzaGlwIHN1bmsgbWFyayBhcyBzdWNoXG5pZiBhbGwgc2hpcHMgc3VuayBnYW1lIG92ZXJcbiovXG5cbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncy5qc29uJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbmFtZWRcbmltcG9ydCB7IHJlbmRlckJvYXJkcyB9IGZyb20gJy4uL3dlYi9kb20uanMnO1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIC8vIGluc3RhbnRpYXRlIGdhbWUgb2JqZWN0c1xuICBjb25zdCBnYW1lRGF0YSA9IFtcbiAgICB7IHBsYXllcjogbmV3IFBsYXllcih0cnVlKSwgYm9hcmQ6IG5ldyBHYW1lYm9hcmQoKSB9LFxuICAgIHsgcGxheWVyOiBuZXcgUGxheWVyKGZhbHNlKSwgYm9hcmQ6IG5ldyBHYW1lYm9hcmQoKSB9LFxuICBdO1xuICBsZXQgY3VycmVudFBsYXllciA9IDA7XG4gIGxldCBlbmVteVBsYXllciA9IDE7XG5cbiAgcGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gIHJlbmRlckJvYXJkcyhnYW1lRGF0YSk7XG5cbiAgd2hpbGUgKHZhbGlkTW92ZXNSZW1haW5pbmcoZ2FtZURhdGEpKSB7XG4gICAgY29uc3QgYXR0YWNrTW92ZSA9IGF3YWl0IGdldEF0dGFja0Nvb3JkcyhnYW1lRGF0YVtjdXJyZW50UGxheWVyXS5wbGF5ZXIpO1xuICAgIGdhbWVEYXRhW2VuZW15UGxheWVyXS5ib2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja01vdmUueCwgYXR0YWNrTW92ZS55KTtcbiAgICByZW5kZXJCb2FyZHMoZ2FtZURhdGEpO1xuICAgIHN3aXRjaFBsYXllcigpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoUGxheWVyKCkge1xuICAgIGNvbnN0IHRtcCA9IGN1cnJlbnRQbGF5ZXI7XG4gICAgY3VycmVudFBsYXllciA9IGVuZW15UGxheWVyO1xuICAgIGVuZW15UGxheWVyID0gdG1wO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwc1JhbmRvbWx5KCkge1xuICAgIGNvbnN0IHsgc2hpcHMgfSA9IHNldHRpbmdzO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgIGxldCB5ID0gMDtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgIGdhbWVEYXRhWzBdLmJvYXJkLnBsYWNlU2hpcChzaGlwLm5hbWUsIDAsIHksIGZhbHNlKTtcbiAgICAgIGdhbWVEYXRhWzBdLmJvYXJkLnJlY2VpdmVBdHRhY2soMCwgeSk7XG4gICAgICBnYW1lRGF0YVsxXS5ib2FyZC5wbGFjZVNoaXAoc2hpcC5uYW1lLCAwLCB5LCBmYWxzZSk7XG4gICAgICBnYW1lRGF0YVsxXS5ib2FyZC5yZWNlaXZlQXR0YWNrKDAsIHkpO1xuICAgICAgeSsrO1xuICAgIH1cbiAgICBnYW1lRGF0YVswXS5ib2FyZC5yZWNlaXZlQXR0YWNrKDksIDkpO1xuICAgIGdhbWVEYXRhWzFdLmJvYXJkLnJlY2VpdmVBdHRhY2soMywgMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRNb3Zlc1JlbWFpbmluZyhnYW1lRGF0YSkge1xuICAvLyByZXR1cm4gZmFsc2U7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnJlYWNoYWJsZVxuICByZXR1cm4gZ2FtZURhdGFbMF0ucGxheWVyLnZhbGlkTW92ZXMubGVuZ3RoID4gMCAmJiBnYW1lRGF0YVsxXS5wbGF5ZXIudmFsaWRNb3Zlcy5sZW5ndGggPiAwO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRBdHRhY2tDb29yZHMocGxheWVyKSB7XG4gIGxldCBhdHRhY2sgPSBwbGF5ZXIuYXR0YWNrKCk7XG4gIGlmIChhdHRhY2sgPT09IG51bGwpIHtcbiAgICBhdHRhY2sgPSB7IHg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApIH07XG4gIH1cbiAgcmV0dXJuIGF0dGFjaztcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCB7IHN0YXJ0R2FtZSB9O1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwLmpzJztcbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuL3NldHRpbmdzLmpzb24nO1xuXG4vKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBDT05TVEFOVFNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbmNvbnN0IEJPQVJEX1NJWkUgPSBzZXR0aW5nc1snZ2FtZWJvYXJkLXNpemUnXTtcblxuLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQ09OU1RSVUNUT1JTXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIEdhbWVib2FyZCBvYmplY3RcbiAqIEBwYXJhbSB7bnVtYmVyIHwgdW5kZWZpbmVkfSBzaXplIGRlZmF1bHRzIHRvIDEwIGJ1dCBjYW4gYmUgc2V0IG1hbnVhbGx5XG4gKi9cbmZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgdGhpcy5zaXplID0gQk9BUkRfU0laRTtcbiAgdGhpcy5ib2FyZCA9IG5ldyBBcnJheSh0aGlzLnNpemUpLmZpbGwobnVsbCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMuYm9hcmRbaV0gPSBuZXcgQXJyYXkodGhpcy5zaXplKS5maWxsKG51bGwpO1xuICB9XG4gIHRoaXMubWlzc2VzID0gW107XG4gIHRoaXMuc2hpcHMgPSBbXTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjb29yZCBvYmplY3QgdGhhdCBob2xkcyB4IGFuZCB5IG51bWJlcmljIHZhbHVlcyBmb3IgYSBib2FyZCBjby1vcmRpbmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHggeCBjby1vcmRpbmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHkgeSBjby1vcmRpbmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gQ29vcmQoeCwgeSkge1xuICB0aGlzLnggPSBwYXJzZUludCh4LCAxMCk7XG4gIHRoaXMueSA9IHBhcnNlSW50KHksIDEwKTtcbn1cblxuLyoqXG4gKiBBbiBvYmplY3QgdGhhdCByZWNvcmRzIGRhdGEgcmVxdWlyZWQgZm9yIHBsYWNlbWVudCBvbnRvIGEgc3F1YXJlIG9mIHRoZSBHYW1lYm9hcmQgb2JqZWN0cyBib2FyZCBwcm9wZXJ0eVxuICogQHBhcmFtIHtTaGlwfSBzaGlwXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJvYXJkUGxhY2VtZW50KHNoaXAsIGluZGV4KSB7XG4gIHRoaXMuc2hpcCA9IHNoaXA7XG4gIHRoaXMuc2hpcEh1bGxJbmRleCA9IGluZGV4O1xufVxuXG4vKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNRVRIT0RTXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4vKipcbiAqIFBsYWNlIGEgc2hpcCBvbiB0aGUgYm9hcmRcbiAqIEBwYXJhbSB7U2hpcH0gc2hpcE5hbWUgYSBTaGlwIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IHggeCBjby1vcmRpbmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHkgeSBjby1vcmRpbmF0ZVxuICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCBhIGJvb2xlYW4sIHRydWUgaWYgdmVydGljYWwsIGZhbHNlIGlmIGhvcml6b250YWxcbiAqL1xuR2FtZWJvYXJkLnByb3RvdHlwZS5wbGFjZVNoaXAgPSBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcE5hbWUsIHgsIHksIHZlcnRpY2FsKSB7XG4gIGNvbnN0IHNoaXBEZXRhaWxzID0gZGV0ZXJtaW5lU2hpcERldGFpbHMoc2hpcE5hbWUsIG5ldyBDb29yZCh4LCB5KSwgdmVydGljYWwpO1xuICBpZiAoIXNoaXBEZXRhaWxzKSByZXR1cm4gZmFsc2U7XG4gIGlmICghZGV0ZXJtaW5lU2hpcE92ZXJsYXAuY2FsbCh0aGlzLCBzaGlwRGV0YWlscy5jb29yZHMpKSByZXR1cm4gZmFsc2U7XG4gIGxldCBpbmRleCA9IDA7XG4gIHNoaXBEZXRhaWxzLmNvb3Jkcy5mb3JFYWNoKGUgPT4geyB0aGlzLmJvYXJkW2UueV1bZS54XSA9IG5ldyBCb2FyZFBsYWNlbWVudChzaGlwRGV0YWlscy5zaGlwLCBpbmRleCsrKTsgfSk7XG4gIHRoaXMuc2hpcHMucHVzaChzaGlwRGV0YWlscy5zaGlwKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIFJlY2VpdmUgYW4gYXR0YWNrLiBUaGUgYXR0YWNrIHdpbGwgZWl0aGVyIGhpdCBhIHNoaXAsIGluIHdoaWNoIGNhc2UgdGhhdCBzaGlwIHJlY29yZHMgYSBoaXQgYXQgdGhhdCBwb3NpdGlvbjtcbiAqIG9yIHRoZSBhdHRhY2sgd2lsbCBtaXNzLCBpbiB3aGljaCBjYXNlIGl0IGlzIHJlY29yZGVkIGluIHRoZSBtaXNzZXMgYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IHggY28tb3JkaW5hdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IHkgY28tb3JkaW5hdGVcbiAqIEByZXR1cm5zIHRydWUgaWYgYXR0YWNrIHdhcyBzdWNjZXNzZnVsLCBmYWxzZSBpZiBhdHRhY2sgd2FzIGEgbWlzc1xuICovXG5HYW1lYm9hcmQucHJvdG90eXBlLnJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci10ZW1wbGF0ZVxuICAvLyBjb25zb2xlLmxvZygneCBhbmQgeTonICsgeCArICcgJyArIHkpO1xuICAvLyBjb25zb2xlLmxvZyh0aGlzLmJvYXJkW3ldKTtcbiAgY29uc3Qgc3F1YXJlID0gdGhpcy5ib2FyZFt5XVt4XTtcbiAgaWYgKHNxdWFyZSA9PT0gbnVsbCkge1xuICAgIHRoaXMubWlzc2VzLnB1c2gobmV3IENvb3JkKHgsIHkpKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3F1YXJlLnNoaXAuaGl0KHNxdWFyZS5zaGlwSHVsbEluZGV4KTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFsbCBzaGlwcyBvbiB0aGUgYm9hcmQgYXJlIHN1bmtcbiAqIEByZXR1cm5zIHRydWUgaWYgYWxsIHN1bmtzIGFyZSBzdW5rLCBhbmQgZmFsc2UgaWYgdGhleSBhcmUgbm90XG4gKi9cbkdhbWVib2FyZC5wcm90b3R5cGUuYWxsU3VuayA9IGZ1bmN0aW9uIGFsbFN1bmsoKSB7XG4gIHJldHVybiB0aGlzLnNoaXBzLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7XG4gICAgaWYgKCFjdXIuaXNTdW5rKCkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gcHJldjtcbiAgfSwgdHJ1ZSk7XG59O1xuXG4vKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBIRUxQRVIgRlVOQ1RJT05TXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4vKipcbiAqICBEZXRlcm1pbmVzIGlmIGEgc2hpcHMgcGxhY2VtZW50IGlzIGFjY2VwdGFibGUgaW4gdGhhdCBpdCBkb2VzIG5vdCBvdmVybGFwIGFub3RoZXIgc2hpcC5cbiAqIEBwYXJhbSB7Q29vcmRbXX0gc2hpcENvb3JkcyBzaGlwIGNvb3JkcyB0byBjaGVja1xuICogQHRoaXMge0dhbWVib2FyZH0gdGhpcyBmdW5jdGlvbiBtdXN0IGhhdmUgaXRzIGNvbnRleHQvIHRoaXMgc2V0IHRvIGEgZ2FtZWJvYXJkIG9iamVjdFxuICogQHJldHVybiBhIGJvb2xlYW4gcmVwcmVzZW50aW5nIGlmIHRoaXMgc2hpcCBwbGFjZW1lbnQgaXMgdmFsaWQsIGluIHRoYXQgaXQgZG9lcyBub3Qgb3ZlcmxhcCBhbm90aGVyIHNoaXBcbiAqL1xuZnVuY3Rpb24gZGV0ZXJtaW5lU2hpcE92ZXJsYXAoc2hpcENvb3Jkcykge1xuICBsZXQgb3ZlcmxhcEZvdW5kID0gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcENvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0aGlzLmJvYXJkW3NoaXBDb29yZHNbaV0ueV1bc2hpcENvb3Jkc1tpXS54XSAhPT0gbnVsbCkge1xuICAgICAgb3ZlcmxhcEZvdW5kID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gIW92ZXJsYXBGb3VuZDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHNoaXAgZGV0YWlscy4gVGhhdCBpcywgdGhlIHJlc29sdmVzIHRoZSBzaGlwTmFtZSB0byBhIFNoaXAgb2JqZWN0LCBhbmQgZGV0ZXJtaW5lcyBhbGwgdGhlIGNvb3JkaW5hdGVzIG9uIHRoZSBib2FyZCB0aGUgU2hpcFxuICogd291bGQgaW5oYWJpdCwgdGFraW5nIGludG8gY29uc2lkZXJhdGlvbiBpdHMgb3JpZW50YXRpb24gdmVydGljYWxseSBvciBob3Jpem9udGFsbHlcbiAqIEBwYXJhbSB7c3RyaW5nfSBzaGlwTmFtZSBuYW1lIG9mIHNoaXAgdHlwZVxuICogQHBhcmFtIHtDb29yZH0gc2VsZWN0ZWRDb29yZCBDb29yZCBvYmplY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdmVydGljYWwgdmVydGljYWwgaWYgdHJ1ZSwgaG9yaXpvbnRhbCBpZiBmYWxzZVxuICogQHJldHVybnMgZmFsc2UgaWYgaW52YWxpZCwgc2hpcCBwbGFjZW1lbnQgZGV0YWlscyBpZiB2YWxpZC5cbiAqL1xuZnVuY3Rpb24gZGV0ZXJtaW5lU2hpcERldGFpbHMoc2hpcE5hbWUsIHNlbGVjdGVkQ29vcmQsIHZlcnRpY2FsKSB7XG4gIC8vIHZhbGlkYXRlIHN0YXJ0IGNvb3Jkc1xuICBpZiAoIXZhbGlkYXRlQ29vcmRzKHNlbGVjdGVkQ29vcmQpKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gdmFsaWRhdGUgc2hpcCBuYW1lIGFuZCBpbnN0YW50aWF0ZSBzaGlwXG4gIGxldCBzaGlwO1xuICB0cnkge1xuICAgIHNoaXAgPSBuZXcgU2hpcChzaGlwTmFtZSk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGMgPSBzZWxlY3RlZENvb3JkO1xuICBjb25zdCBzaGlwUGxhY2VtZW50Q29vcmRzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5odWxsLmxlbmd0aDsgaSsrKSB7XG4gICAgc2hpcFBsYWNlbWVudENvb3Jkcy5wdXNoKG5ldyBDb29yZChjLngsIGMueSkpO1xuICAgIGlmICh2ZXJ0aWNhbCkgYy55Kys7XG4gICAgZWxzZSBjLngrKztcbiAgfVxuXG4gIC8vIHZhbGlkYXRlIGVuZCBjb29yZHNcbiAgaWYgKCF2YWxpZGF0ZUNvb3JkcyhzaGlwUGxhY2VtZW50Q29vcmRzLmF0KC0xKSkpIHJldHVybiBmYWxzZTtcblxuICAvLyByZXR1cm4gc2hpcCBwbGFjZW1lbnQgZGV0YWlsc1xuICByZXR1cm4ge1xuICAgIHNoaXAsXG4gICAgY29vcmRzOiBzaGlwUGxhY2VtZW50Q29vcmRzLFxuICB9O1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIGJhc2ljIGNvb3JkIHZhbHVlcy5cbiAqIEBwYXJhbSB7Q29vcmR9IGNvb3JkcyBvYmplY3QgbGl0ZXJhbCBjb250YWluaW5nIHggYW5kIHkgcHJvcGVydGllc1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgY29vcmRzIGFyZSB2YWxpZCwgZmFsc2UgaWYgaW52YWxpZFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUNvb3Jkcyhjb29yZHMpIHtcbiAgaWYgKHR5cGVvZiBjb29yZHMueCAhPT0gJ251bWJlcidcbiAgICB8fCB0eXBlb2YgY29vcmRzLnkgIT09ICdudW1iZXInXG4gICAgfHwgY29vcmRzLnggPCAwXG4gICAgfHwgY29vcmRzLnkgPCAwXG4gICAgfHwgY29vcmRzLnggPj0gQk9BUkRfU0laRVxuICAgIHx8IGNvb3Jkcy55ID49IEJPQVJEX1NJWkUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbmV4cG9ydCB7IEJPQVJEX1NJWkUgfTtcbiIsImltcG9ydCB7IENvb3JkIH0gZnJvbSAnLi9HYW1lYm9hcmQuanMnO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4vc2V0dGluZ3MuanNvbic7XG5cbmNvbnN0IEJPQVJEX1NJWkUgPSBzZXR0aW5nc1snZ2FtZWJvYXJkLXNpemUnXTtcbi8qKlxuICogQ3JlYXRlIGEgcGxheWVyIG9iamVjdFxuICogQHBhcmFtIHtib29sZWFufSBodW1hbiB0cnVlIGlmIHRoaXMgaXMgYSBodW1hbiBwbGF5ZXIsIGZhbHNlIGlmIGl0IGlzIGEgY29tcHV0ZXIgcGxheWVyXG4gKi9cbmZ1bmN0aW9uIFBsYXllcihodW1hbikge1xuICB0aGlzLmh1bWFuID0gaHVtYW47XG4gIHRoaXMudmFsaWRNb3ZlcyA9IFtdO1xuICBmb3IgKGxldCB4ID0gMDsgeCA8IEJPQVJEX1NJWkU7IHgrKykge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgQk9BUkRfU0laRTsgeSsrKSB7XG4gICAgICB0aGlzLnZhbGlkTW92ZXMucHVzaCgodGhpcy5odW1hbikgPyBudWxsIDogbmV3IENvb3JkKHgsIHkpKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogSWYgdGhpcyBQbGF5ZXIgaXMgaHVtYW4sIHRoZW4gcmV0dXJuIG51bGwuXG4gKiBJZiB0aGlzIHBsYXllciBpcyBjb21wdXRlciwgc2VsZWN0IGEgcmFuZG9tIHZhbGlkTW92ZSBhbmQgcmV0dXJuIGl0LlxuICogSW4gZWl0aGVyIGNhc2UsIHRoZSBudW1iZXIgb2YgdmFsaWRNb3ZlcyBpcyByZWR1Y2VkIGJ5IDEuXG4gKiBAcmV0dXJucyBudWxsIGZvciBodW1hbiBwbGF5ZXJzLCBhbmQgYSBDb29yZCBvYmplY3QgZm9yIGNvbXB1dGVyc1xuICogQHRocm93IGlmIHZhbGlkTW92ZXMubGVuZ3RoIGlzIDAuXG4gKi9cblBsYXllci5wcm90b3R5cGUuYXR0YWNrID0gZnVuY3Rpb24gYXR0YWNrKCkge1xuICBpZiAodGhpcy52YWxpZE1vdmVzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKHRoaXMuaHVtYW4pXG4gICAgICA/IHRoaXMudmFsaWRNb3Zlcy5wb3AoKVxuICAgICAgOiB0aGlzLnZhbGlkTW92ZXMuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudmFsaWRNb3Zlcy5sZW5ndGgpLCAxKS5hdCgwKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ25vIHZhbGlkIG1vdmVzIHJlbWFpbmluZycpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiaW1wb3J0IHNldHRpbmdzIGZyb20gJy4vc2V0dGluZ3MuanNvbic7XG5cbi8qKlxuICogQ3JlYXRlIGEgc2hpcCBvYmplY3QsIGJ5IHNwZWNpZnlpbmcgdGhlIG5hbWUgb2YgdGhlIHNoaXAgcmVxdWlyZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gc2hpcCBuYW1lIG9mIHNoaXAsIGNvcnJlc3BvbmRzIHRvIGEgbGVuZ3RoLlxuICovXG5mdW5jdGlvbiBTaGlwKHNoaXApIHtcbiAgdGhpcy5sZW5ndGggPSB2YWxpZGF0ZVNoaXAoc2hpcCk7XG4gIHRoaXMubmFtZSA9IHNoaXA7XG4gIHRoaXMuaHVsbCA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aCkuZmlsbChmYWxzZSk7XG59XG5cbi8qKlxuICogJ2hpdCcgLyBhdHRhY2sgdGhpcyBzaGlwIGF0IHNwZWNpZmllZCBpbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uIHRoZSB6ZXJvLWluZGV4ZWQgcG9zaXRvbiBvZiB0aGlzIHNoaXBzIGh1bGwgdG8gcmVjb3JkIGEgaGl0XG4gKi9cblNoaXAucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uIGhpdChpbmRleCkge1xuICBpZiAoaW5kZXggPj0gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHNwZWNpZmllZCBoaXQgaW5kZXggXCIke2luZGV4fVwiIGlzIGdyZWF0ZXIgdGhhbiBhbGxvd2FibGUgZm9yIGEgc2hpcCBvZiBsZW5ndGggJHt0aGlzLmxlbmd0aH0uYCk7XG4gIH0gZWxzZSBpZiAoaW5kZXggPCAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBzcGVjaWZpZWQgaGl0IGluZGV4IFwiJHtpbmRleH1cIiBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gIH1cbiAgdGhpcy5odWxsW2luZGV4XSA9IHRydWU7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGEgc2hpcCBoYXMgc3VuaywgdGhhdCBpcywgaXQncyBodWxsIGhhcyBiZWVuIGhpdCBhdCBlYWNoIHBvc2l0aW9uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmVwcmVzZW50aW5nIGlmIHRoaXMgc2hpcCBoYXMgYmVlbiBzdW5rXG4gKi9cblNoaXAucHJvdG90eXBlLmlzU3VuayA9IGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgcmV0dXJuIHRoaXMuaHVsbC5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IGN1cnJlbnQgPT09IGZhbHNlID8gZmFsc2UgOiBwcmV2LCB0cnVlKTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lIHRoZSBsZW5ndGggb2YgYSBzaGlwLCBieSBpdCdzIG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzaGlwIGEgbmFtZSBvZiBhIHNoaXBcbiAqIEByZXR1cm5zIHRoZSBsZW5ndGggb2Ygc2FpZCBzaGlwXG4gKiBAdGhyb3dzIEVycm9yIGlmIHNoaXAgbmFtZSBub3QgcmVjb2duaXNlZFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZVNoaXAoc2hpcCkge1xuICAvLyBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcHNUeXBlcy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IChjdXJyZW50Lm5hbWUgPT09IHNoaXApID8gY3VycmVudC5sZW5ndGggOiBwcmV2LCBudWxsKTtcbiAgY29uc3Qgc2hpcExlbmd0aCA9IHNldHRpbmdzLnNoaXBzLnJlZHVjZSgocHJldiwgY3VyKSA9PiAoY3VyLm5hbWUgPT09IHNoaXApID8gY3VyLnNpemUgOiBwcmV2LCBudWxsKTtcbiAgaWYgKHNoaXBMZW5ndGggPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHNoaXAgcGFyYW1ldGVyIHN0cmluZyBub3QgcmVjb2duaXNlZDogXCIke3NoaXB9XCIuIEFsbG93YWJsZSB2YWx1ZXM6ICR7c2V0dGluZ3Muc2hpcHMubWFwKGUgPT4gZS5uYW1lKX1gKTtcbiAgfVxuICByZXR1cm4gc2hpcExlbmd0aDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi4vb2JqL3NldHRpbmdzLmpzb24nO1xuXG5jb25zdCBCT0FSRF9TSVpFID0gc2V0dGluZ3NbJ2dhbWVib2FyZC1zaXplJ107XG5cbi8qKlxuICogQnVpbGQgQmF0dGxlc2hpcHMgVUlcbiAqL1xuZnVuY3Rpb24gaW5pdGlhbGl6ZURPTSgpIHtcbiAgLy8gcGxhY2UgYSBjb3VwbGUgb2YgdGVzdCBzaGlwc1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1jb250YWluZXInKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmRFbGVtZW50KEJPQVJEX1NJWkUsICdib2FyZFBsYXllcicpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmRFbGVtZW50KEJPQVJEX1NJWkUsICdib2FyZENvbXB1dGVyJykpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHZpc3VhbCByZXByZXNlbnRhdGlvbiBvZiBhIEdhbWVib2FyZFxuICogQHBhcmFtIHtudW1iZXJ9IGJvYXJkU2l6ZSB0aGUgbGVuZ3RoIG9mIHRoZSBnYW1lYm9hcmQgc2lkZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCBpZCBhdHRyaWJ1dGUgb2YgdGhpcyBIVE1MIGVsZW1lbnRcbiAqIEByZXR1cm5zIEhUTUxEaXZFbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGJ1aWxkQm9hcmRFbGVtZW50KGJvYXJkU2l6ZSwgaWQpIHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9hcmQuY2xhc3NOYW1lID0gJ2JvYXJkJztcbiAgYm9hcmQuaWQgPSBpZDtcbiAgZm9yIChsZXQgeCA9IDA7IHggPCBib2FyZFNpemU7IHgrKykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdy5jbGFzc05hbWUgPSAncm93JztcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGJvYXJkU2l6ZTsgeSsrKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNxdWFyZS5jbGFzc05hbWUgPSAnYm9hcmQgc3F1YXJlJztcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cbiAgICBib2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG4gIHJldHVybiBib2FyZDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQm9hcmRzKGdhbWVEYXRhKSB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgYjFPYmo6IGdhbWVEYXRhWzBdLmJvYXJkLFxuICAgIGIxRG9tOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9hcmRQbGF5ZXInKSxcbiAgICBiMk9iajogZ2FtZURhdGFbMV0uYm9hcmQsXG4gICAgYjJEb206IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2FyZENvbXB1dGVyJyksXG4gIH07XG5cbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgZGF0YS5iMU9iai5zaXplOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGRhdGEuYjFPYmouc2l6ZTsgY29sKyspIHtcbiAgICAgIGRhdGEucDFTcXVhcmVPYmogPSBkYXRhLmIxT2JqLmJvYXJkW3Jvd11bY29sXTtcbiAgICAgIGRhdGEucDFTcXVhcmVEb20gPSBkYXRhLmIxRG9tLmNoaWxkTm9kZXNbcm93XS5jaGlsZE5vZGVzW2NvbF07XG4gICAgICBkYXRhLnAyU3F1YXJlT2JqID0gZGF0YS5iMk9iai5ib2FyZFtyb3ddW2NvbF07XG4gICAgICBkYXRhLnAyU3F1YXJlRG9tID0gZGF0YS5iMkRvbS5jaGlsZE5vZGVzW3Jvd10uY2hpbGROb2Rlc1tjb2xdO1xuICAgICAgaHVtYW5TcXVhcmVIYW5kbGUoKTtcbiAgICAgIGNvbXB1dGVyU3F1YXJlSGFuZGxlKHJvdywgY29sKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBodW1hblNxdWFyZUhhbmRsZSgpIHtcbiAgICBpZiAoZGF0YS5wMVNxdWFyZU9iaiA9PT0gbnVsbCkge1xuICAgICAgZGF0YS5wMVNxdWFyZURvbS5jbGFzc05hbWUgPSAnYm9hcmQgc3F1YXJlJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5wMVNxdWFyZURvbS5jbGFzc05hbWUgPSAnYm9hcmQgc3F1YXJlIHNoaXAnO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVyU3F1YXJlSGFuZGxlKHJvdywgY29sKSB7XG4gICAgY29uc3QgbWlzc0F0ID0gZGF0YS5iMk9iai5taXNzZXMucmVkdWNlKChwcmV2LCBjdXIpID0+IChjdXIueCA9PT0gY29sICYmIGN1ci55ID09PSByb3cpID8gdHJ1ZSA6IHByZXYsIGZhbHNlKTtcbiAgICAvLyBjb25zdCBtaXNzQXQgPSBiMk9iai5taXNzZXMuaW5kZXhPZih7IHg6IGNvbCwgeTogcm93IH0pICE9PSAtMTtcbiAgICBjb25zdCBzaGlwQXRTdHJ1Y2sgPSAoZGF0YS5wMlNxdWFyZU9iaiAhPT0gbnVsbCAmJiBkYXRhLnAyU3F1YXJlT2JqLnNoaXAuaHVsbFtkYXRhLnAyU3F1YXJlT2JqLnNoaXBIdWxsSW5kZXhdID09PSB0cnVlKTtcbiAgICBpZiAoc2hpcEF0U3RydWNrKSB7XG4gICAgICBkYXRhLnAyU3F1YXJlRG9tLmNsYXNzTmFtZSA9ICdib2FyZCBzcXVhcmUgc3RydWNrLWhpdCc7XG4gICAgfSBlbHNlIGlmIChtaXNzQXQpIHtcbiAgICAgIGRhdGEucDJTcXVhcmVEb20uY2xhc3NOYW1lID0gJ2JvYXJkIHNxdWFyZSBzdHJ1Y2stbWlzcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEucDJTcXVhcmVEb20uY2xhc3NOYW1lID0gJ2JvYXJkIHNxdWFyZSc7XG4gICAgfVxuICB9XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBpbml0aWFsaXplRE9NLCByZW5kZXJCb2FyZHMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGluaXRpYWxpemVET00gfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tICcuLi9vYmovR2FtZS5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL29iai9QbGF5ZXInO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuLi9vYmovR2FtZWJvYXJkJztcblxuaW5pdGlhbGl6ZURPTSgpO1xuc3RhcnRHYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=