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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --square-dimension: 45px;\n}\n\n/* Board */\n\ndiv.board-container {\n  display: grid;\n  grid-template: 1fr/ repeat(2, 1fr);\n  justify-items: center;\n  align-items: center;\n\n  width: 100%;\n\n  border: 1px solid blueviolet;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  \n  border: 5px solid red;\n}\n\n.board>.row {\n  display: flex;\n  flex-direction: row;\n}\n\n/* Board square borders */\n\n.board .square {\n  height: var(--square-dimension);\n  width: var(--square-dimension);\n\n  /* border: 1px solid blue; */\n  border-top: 1px solid blue;\n  border-right: 1px solid blue;\n}\n\n.board.square.ship {\n  background-color: chartreuse;\n}\n\n.board.square.struck-hit {\n  background-color: green;\n}\n\n.board.square.struck-miss {\n  background-color: red;\n}\n\n.board .square[data-row=\"9\"] {\n  border-bottom: 1px solid blue;\n}\n\n.board .square[data-col=\"0\"] {\n  border-left: 1px solid blue;\n}\n", "",{"version":3,"sources":["webpack://./src/web/styles.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;AAC1B;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,kCAAkC;EAClC,qBAAqB;EACrB,mBAAmB;;EAEnB,WAAW;;EAEX,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA,yBAAyB;;AAEzB;EACE,+BAA+B;EAC/B,8BAA8B;;EAE9B,4BAA4B;EAC5B,0BAA0B;EAC1B,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,2BAA2B;AAC7B","sourcesContent":[":root {\n  --square-dimension: 45px;\n}\n\n/* Board */\n\ndiv.board-container {\n  display: grid;\n  grid-template: 1fr/ repeat(2, 1fr);\n  justify-items: center;\n  align-items: center;\n\n  width: 100%;\n\n  border: 1px solid blueviolet;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  \n  border: 5px solid red;\n}\n\n.board>.row {\n  display: flex;\n  flex-direction: row;\n}\n\n/* Board square borders */\n\n.board .square {\n  height: var(--square-dimension);\n  width: var(--square-dimension);\n\n  /* border: 1px solid blue; */\n  border-top: 1px solid blue;\n  border-right: 1px solid blue;\n}\n\n.board.square.ship {\n  background-color: chartreuse;\n}\n\n.board.square.struck-hit {\n  background-color: green;\n}\n\n.board.square.struck-miss {\n  background-color: red;\n}\n\n.board .square[data-row=\"9\"] {\n  border-bottom: 1px solid blue;\n}\n\n.board .square[data-col=\"0\"] {\n  border-left: 1px solid blue;\n}\n"],"sourceRoot":""}]);
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

  // !gameObjs[0].board.allSunk() && !gameObjs[1].board.allSunk()
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
  return false;
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
  const b1Obj = gameData[0].board;
  const b1Dom = document.querySelector('#boardPlayer');

  const b2Obj = gameData[1].board;
  const b2Dom = document.querySelector('#boardComputer');

  for (let row = 0; row < b1Obj.size; row++) {
    for (let col = 0; col < b1Obj.size; col++) {
      const p1SquareObj = b1Obj.board[row][col];
      const p1SquareDom = b1Dom.childNodes[row].childNodes[col];
      const p2SquareObj = b2Obj.board[row][col];
      const p2SquareDom = b2Dom.childNodes[row].childNodes[col];

      humanSquareHandle(p1SquareObj, p1SquareDom);
      const missAt = b2Obj.misses.reduce((prev, cur) => (cur.x === col && cur.y === row) ? true : prev, false);
      // const missAt = b2Obj.misses.indexOf({ x: col, y: row }) !== -1;
      const shipAtStruck = (p2SquareObj !== null && p2SquareObj.ship.hull[p2SquareObj.shipHullIndex] === true);
      if (shipAtStruck) {
        p2SquareDom.className = 'board square struck-hit';
      } else if (missAt) {
        p2SquareDom.className = 'board square struck-miss';
      } else {
        p2SquareDom.className = 'board square';
      }
    }
  }

  function humanSquareHandle(squareObj, squareDom) {
    if (squareObj === null) {
      // eslint-disable-next-line no-param-reassign
      squareDom.className = 'board square';
    } else {
      // eslint-disable-next-line no-param-reassign
      squareDom.className = 'board square ship';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDbUI7QUFDRTtBQUNSO0FBQ007O0FBRXpDLHNEQUFhO0FBQ2IsdURBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvd2ViL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvd2ViL3N0eWxlcy5jc3M/NDM0MCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9vYmovR2FtZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL1BsYXllci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL1NoaXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3dlYi9kb20uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3dlYi9Db250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1zcXVhcmUtZGltZW5zaW9uOiA0NXB4O1xcbn1cXG5cXG4vKiBCb2FyZCAqL1xcblxcbmRpdi5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmci8gcmVwZWF0KDIsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVldmlvbGV0O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmJvYXJkPi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi8qIEJvYXJkIHNxdWFyZSBib3JkZXJzICovXFxuXFxuLmJvYXJkIC5zcXVhcmUge1xcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXG4gIHdpZHRoOiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXG5cXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmx1ZTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsdWU7XFxufVxcblxcbi5ib2FyZC5zcXVhcmUuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xcbn1cXG5cXG4uYm9hcmQuc3F1YXJlLnN0cnVjay1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5ib2FyZC5zcXVhcmUuc3RydWNrLW1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uYm9hcmQgLnNxdWFyZVtkYXRhLXJvdz1cXFwiOVxcXCJdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4uYm9hcmQgLnNxdWFyZVtkYXRhLWNvbD1cXFwiMFxcXCJdIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmx1ZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3dlYi9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixtQkFBbUI7O0VBRW5CLFdBQVc7O0VBRVgsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0UsK0JBQStCO0VBQy9CLDhCQUE4Qjs7RUFFOUIsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1zcXVhcmUtZGltZW5zaW9uOiA0NXB4O1xcbn1cXG5cXG4vKiBCb2FyZCAqL1xcblxcbmRpdi5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmci8gcmVwZWF0KDIsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVldmlvbGV0O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmJvYXJkPi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi8qIEJvYXJkIHNxdWFyZSBib3JkZXJzICovXFxuXFxuLmJvYXJkIC5zcXVhcmUge1xcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXG4gIHdpZHRoOiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXG5cXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmx1ZTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsdWU7XFxufVxcblxcbi5ib2FyZC5zcXVhcmUuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xcbn1cXG5cXG4uYm9hcmQuc3F1YXJlLnN0cnVjay1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5ib2FyZC5zcXVhcmUuc3RydWNrLW1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uYm9hcmQgLnNxdWFyZVtkYXRhLXJvdz1cXFwiOVxcXCJdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4uYm9hcmQgLnNxdWFyZVtkYXRhLWNvbD1cXFwiMFxcXCJdIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmx1ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKlxub25lIHBsYXllciB0YWtlIHR1cm5cbiAgY2hvc2UgYSBzcG90IHRvIGF0dGFjayBlbmVteSBnYW1lYm9hcmQsIHRoYXQgaGFzIG5vdCBiZWVuIHByZXZpb3VzbHkgYXR0YWNrZWRcbiAgICBpZiBhIGhpdFxuICAgICAgbWFyayBzcXVhcmUgYXMgaGl0XG4gICAgaWYgYSBtaXNzIG1hcmsgc3F1YXJlIGFzIGEgbWlzc1xuaWYgc2hpcCBzdW5rIG1hcmsgYXMgc3VjaFxuaWYgYWxsIHNoaXBzIHN1bmsgZ2FtZSBvdmVyXG4qL1xuXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vR2FtZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4vc2V0dGluZ3MuanNvbic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25hbWVkXG5pbXBvcnQgeyByZW5kZXJCb2FyZHMgfSBmcm9tICcuLi93ZWIvZG9tLmpzJztcblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAvLyBpbnN0YW50aWF0ZSBnYW1lIG9iamVjdHNcbiAgY29uc3QgZ2FtZURhdGEgPSBbXG4gICAgeyBwbGF5ZXI6IG5ldyBQbGF5ZXIodHJ1ZSksIGJvYXJkOiBuZXcgR2FtZWJvYXJkKCkgfSxcbiAgICB7IHBsYXllcjogbmV3IFBsYXllcihmYWxzZSksIGJvYXJkOiBuZXcgR2FtZWJvYXJkKCkgfSxcbiAgXTtcbiAgbGV0IGN1cnJlbnRQbGF5ZXIgPSAwO1xuICBsZXQgZW5lbXlQbGF5ZXIgPSAxO1xuXG4gIHBsYWNlU2hpcHNSYW5kb21seSgpO1xuICByZW5kZXJCb2FyZHMoZ2FtZURhdGEpO1xuXG4gIC8vICFnYW1lT2Jqc1swXS5ib2FyZC5hbGxTdW5rKCkgJiYgIWdhbWVPYmpzWzFdLmJvYXJkLmFsbFN1bmsoKVxuICB3aGlsZSAodmFsaWRNb3Zlc1JlbWFpbmluZyhnYW1lRGF0YSkpIHtcbiAgICBjb25zdCBhdHRhY2tNb3ZlID0gYXdhaXQgZ2V0QXR0YWNrQ29vcmRzKGdhbWVEYXRhW2N1cnJlbnRQbGF5ZXJdLnBsYXllcik7XG4gICAgZ2FtZURhdGFbZW5lbXlQbGF5ZXJdLmJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrTW92ZS54LCBhdHRhY2tNb3ZlLnkpO1xuICAgIHJlbmRlckJvYXJkcyhnYW1lRGF0YSk7XG4gICAgc3dpdGNoUGxheWVyKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzd2l0Y2hQbGF5ZXIoKSB7XG4gICAgY29uc3QgdG1wID0gY3VycmVudFBsYXllcjtcbiAgICBjdXJyZW50UGxheWVyID0gZW5lbXlQbGF5ZXI7XG4gICAgZW5lbXlQbGF5ZXIgPSB0bXA7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXBzUmFuZG9tbHkoKSB7XG4gICAgY29uc3QgeyBzaGlwcyB9ID0gc2V0dGluZ3M7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgbGV0IHkgPSAwO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgICAgZ2FtZURhdGFbMF0uYm9hcmQucGxhY2VTaGlwKHNoaXAubmFtZSwgMCwgeSwgZmFsc2UpO1xuICAgICAgZ2FtZURhdGFbMF0uYm9hcmQucmVjZWl2ZUF0dGFjaygwLCB5KTtcbiAgICAgIGdhbWVEYXRhWzFdLmJvYXJkLnBsYWNlU2hpcChzaGlwLm5hbWUsIDAsIHksIGZhbHNlKTtcbiAgICAgIGdhbWVEYXRhWzFdLmJvYXJkLnJlY2VpdmVBdHRhY2soMCwgeSk7XG4gICAgICB5Kys7XG4gICAgfVxuICAgIGdhbWVEYXRhWzBdLmJvYXJkLnJlY2VpdmVBdHRhY2soOSwgOSk7XG4gICAgZ2FtZURhdGFbMV0uYm9hcmQucmVjZWl2ZUF0dGFjaygzLCAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZE1vdmVzUmVtYWluaW5nKGdhbWVEYXRhKSB7XG4gIHJldHVybiBmYWxzZTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVucmVhY2hhYmxlXG4gIHJldHVybiBnYW1lRGF0YVswXS5wbGF5ZXIudmFsaWRNb3Zlcy5sZW5ndGggPiAwICYmIGdhbWVEYXRhWzFdLnBsYXllci52YWxpZE1vdmVzLmxlbmd0aCA+IDA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEF0dGFja0Nvb3JkcyhwbGF5ZXIpIHtcbiAgbGV0IGF0dGFjayA9IHBsYXllci5hdHRhY2soKTtcbiAgaWYgKGF0dGFjayA9PT0gbnVsbCkge1xuICAgIGF0dGFjayA9IHsgeDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgfTtcbiAgfVxuICByZXR1cm4gYXR0YWNrO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgc3RhcnRHYW1lIH07XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAuanMnO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4vc2V0dGluZ3MuanNvbic7XG5cbi8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIENPTlNUQU5UU1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuY29uc3QgQk9BUkRfU0laRSA9IHNldHRpbmdzWydnYW1lYm9hcmQtc2l6ZSddO1xuXG4vKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBDT05TVFJVQ1RPUlNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi8qKlxuICogQ3JlYXRlIGEgR2FtZWJvYXJkIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXIgfCB1bmRlZmluZWR9IHNpemUgZGVmYXVsdHMgdG8gMTAgYnV0IGNhbiBiZSBzZXQgbWFudWFsbHlcbiAqL1xuZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICB0aGlzLnNpemUgPSBCT0FSRF9TSVpFO1xuICB0aGlzLmJvYXJkID0gbmV3IEFycmF5KHRoaXMuc2l6ZSkuZmlsbChudWxsKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5ib2FyZFtpXSA9IG5ldyBBcnJheSh0aGlzLnNpemUpLmZpbGwobnVsbCk7XG4gIH1cbiAgdGhpcy5taXNzZXMgPSBbXTtcbiAgdGhpcy5zaGlwcyA9IFtdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNvb3JkIG9iamVjdCB0aGF0IGhvbGRzIHggYW5kIHkgbnVtYmVyaWMgdmFsdWVzIGZvciBhIGJvYXJkIGNvLW9yZGluYXRlXG4gKiBAcGFyYW0ge251bWJlcn0geCB4IGNvLW9yZGluYXRlXG4gKiBAcGFyYW0ge251bWJlcn0geSB5IGNvLW9yZGluYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDb29yZCh4LCB5KSB7XG4gIHRoaXMueCA9IHBhcnNlSW50KHgsIDEwKTtcbiAgdGhpcy55ID0gcGFyc2VJbnQoeSwgMTApO1xufVxuXG4vKipcbiAqIEFuIG9iamVjdCB0aGF0IHJlY29yZHMgZGF0YSByZXF1aXJlZCBmb3IgcGxhY2VtZW50IG9udG8gYSBzcXVhcmUgb2YgdGhlIEdhbWVib2FyZCBvYmplY3RzIGJvYXJkIHByb3BlcnR5XG4gKiBAcGFyYW0ge1NoaXB9IHNoaXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICovXG5leHBvcnQgZnVuY3Rpb24gQm9hcmRQbGFjZW1lbnQoc2hpcCwgaW5kZXgpIHtcbiAgdGhpcy5zaGlwID0gc2hpcDtcbiAgdGhpcy5zaGlwSHVsbEluZGV4ID0gaW5kZXg7XG59XG5cbi8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1FVEhPRFNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi8qKlxuICogUGxhY2UgYSBzaGlwIG9uIHRoZSBib2FyZFxuICogQHBhcmFtIHtTaGlwfSBzaGlwTmFtZSBhIFNoaXAgb2JqZWN0XG4gKiBAcGFyYW0ge251bWJlcn0geCB4IGNvLW9yZGluYXRlXG4gKiBAcGFyYW0ge251bWJlcn0geSB5IGNvLW9yZGluYXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIGEgYm9vbGVhbiwgdHJ1ZSBpZiB2ZXJ0aWNhbCwgZmFsc2UgaWYgaG9yaXpvbnRhbFxuICovXG5HYW1lYm9hcmQucHJvdG90eXBlLnBsYWNlU2hpcCA9IGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwTmFtZSwgeCwgeSwgdmVydGljYWwpIHtcbiAgY29uc3Qgc2hpcERldGFpbHMgPSBkZXRlcm1pbmVTaGlwRGV0YWlscyhzaGlwTmFtZSwgbmV3IENvb3JkKHgsIHkpLCB2ZXJ0aWNhbCk7XG4gIGlmICghc2hpcERldGFpbHMpIHJldHVybiBmYWxzZTtcbiAgaWYgKCFkZXRlcm1pbmVTaGlwT3ZlcmxhcC5jYWxsKHRoaXMsIHNoaXBEZXRhaWxzLmNvb3JkcykpIHJldHVybiBmYWxzZTtcbiAgbGV0IGluZGV4ID0gMDtcbiAgc2hpcERldGFpbHMuY29vcmRzLmZvckVhY2goZSA9PiB7IHRoaXMuYm9hcmRbZS55XVtlLnhdID0gbmV3IEJvYXJkUGxhY2VtZW50KHNoaXBEZXRhaWxzLnNoaXAsIGluZGV4KyspOyB9KTtcbiAgdGhpcy5zaGlwcy5wdXNoKHNoaXBEZXRhaWxzLnNoaXApO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogUmVjZWl2ZSBhbiBhdHRhY2suIFRoZSBhdHRhY2sgd2lsbCBlaXRoZXIgaGl0IGEgc2hpcCwgaW4gd2hpY2ggY2FzZSB0aGF0IHNoaXAgcmVjb3JkcyBhIGhpdCBhdCB0aGF0IHBvc2l0aW9uO1xuICogb3IgdGhlIGF0dGFjayB3aWxsIG1pc3MsIGluIHdoaWNoIGNhc2UgaXQgaXMgcmVjb3JkZWQgaW4gdGhlIG1pc3NlcyBhcnJheVxuICogQHBhcmFtIHtudW1iZXJ9IHggeCBjby1vcmRpbmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHkgeSBjby1vcmRpbmF0ZVxuICogQHJldHVybnMgdHJ1ZSBpZiBhdHRhY2sgd2FzIHN1Y2Nlc3NmdWwsIGZhbHNlIGlmIGF0dGFjayB3YXMgYSBtaXNzXG4gKi9cbkdhbWVib2FyZC5wcm90b3R5cGUucmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXRlbXBsYXRlXG4gIC8vIGNvbnNvbGUubG9nKCd4IGFuZCB5OicgKyB4ICsgJyAnICsgeSk7XG4gIC8vIGNvbnNvbGUubG9nKHRoaXMuYm9hcmRbeV0pO1xuICBjb25zdCBzcXVhcmUgPSB0aGlzLmJvYXJkW3ldW3hdO1xuICBpZiAoc3F1YXJlID09PSBudWxsKSB7XG4gICAgdGhpcy5taXNzZXMucHVzaChuZXcgQ29vcmQoeCwgeSkpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzcXVhcmUuc2hpcC5oaXQoc3F1YXJlLnNoaXBIdWxsSW5kZXgpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYWxsIHNoaXBzIG9uIHRoZSBib2FyZCBhcmUgc3Vua1xuICogQHJldHVybnMgdHJ1ZSBpZiBhbGwgc3Vua3MgYXJlIHN1bmssIGFuZCBmYWxzZSBpZiB0aGV5IGFyZSBub3RcbiAqL1xuR2FtZWJvYXJkLnByb3RvdHlwZS5hbGxTdW5rID0gZnVuY3Rpb24gYWxsU3VuaygpIHtcbiAgcmV0dXJuIHRoaXMuc2hpcHMucmVkdWNlKChwcmV2LCBjdXIpID0+IHtcbiAgICBpZiAoIWN1ci5pc1N1bmsoKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBwcmV2O1xuICB9LCB0cnVlKTtcbn07XG5cbi8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEhFTFBFUiBGVU5DVElPTlNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi8qKlxuICogIERldGVybWluZXMgaWYgYSBzaGlwcyBwbGFjZW1lbnQgaXMgYWNjZXB0YWJsZSBpbiB0aGF0IGl0IGRvZXMgbm90IG92ZXJsYXAgYW5vdGhlciBzaGlwLlxuICogQHBhcmFtIHtDb29yZFtdfSBzaGlwQ29vcmRzIHNoaXAgY29vcmRzIHRvIGNoZWNrXG4gKiBAdGhpcyB7R2FtZWJvYXJkfSB0aGlzIGZ1bmN0aW9uIG11c3QgaGF2ZSBpdHMgY29udGV4dC8gdGhpcyBzZXQgdG8gYSBnYW1lYm9hcmQgb2JqZWN0XG4gKiBAcmV0dXJuIGEgYm9vbGVhbiByZXByZXNlbnRpbmcgaWYgdGhpcyBzaGlwIHBsYWNlbWVudCBpcyB2YWxpZCwgaW4gdGhhdCBpdCBkb2VzIG5vdCBvdmVybGFwIGFub3RoZXIgc2hpcFxuICovXG5mdW5jdGlvbiBkZXRlcm1pbmVTaGlwT3ZlcmxhcChzaGlwQ29vcmRzKSB7XG4gIGxldCBvdmVybGFwRm91bmQgPSBmYWxzZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuYm9hcmRbc2hpcENvb3Jkc1tpXS55XVtzaGlwQ29vcmRzW2ldLnhdICE9PSBudWxsKSB7XG4gICAgICBvdmVybGFwRm91bmQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiAhb3ZlcmxhcEZvdW5kO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgc2hpcCBkZXRhaWxzLiBUaGF0IGlzLCB0aGUgcmVzb2x2ZXMgdGhlIHNoaXBOYW1lIHRvIGEgU2hpcCBvYmplY3QsIGFuZCBkZXRlcm1pbmVzIGFsbCB0aGUgY29vcmRpbmF0ZXMgb24gdGhlIGJvYXJkIHRoZSBTaGlwXG4gKiB3b3VsZCBpbmhhYml0LCB0YWtpbmcgaW50byBjb25zaWRlcmF0aW9uIGl0cyBvcmllbnRhdGlvbiB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseVxuICogQHBhcmFtIHtzdHJpbmd9IHNoaXBOYW1lIG5hbWUgb2Ygc2hpcCB0eXBlXG4gKiBAcGFyYW0ge0Nvb3JkfSBzZWxlY3RlZENvb3JkIENvb3JkIG9iamVjdFxuICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCB2ZXJ0aWNhbCBpZiB0cnVlLCBob3Jpem9udGFsIGlmIGZhbHNlXG4gKiBAcmV0dXJucyBmYWxzZSBpZiBpbnZhbGlkLCBzaGlwIHBsYWNlbWVudCBkZXRhaWxzIGlmIHZhbGlkLlxuICovXG5mdW5jdGlvbiBkZXRlcm1pbmVTaGlwRGV0YWlscyhzaGlwTmFtZSwgc2VsZWN0ZWRDb29yZCwgdmVydGljYWwpIHtcbiAgLy8gdmFsaWRhdGUgc3RhcnQgY29vcmRzXG4gIGlmICghdmFsaWRhdGVDb29yZHMoc2VsZWN0ZWRDb29yZCkpIHJldHVybiBmYWxzZTtcblxuICAvLyB2YWxpZGF0ZSBzaGlwIG5hbWUgYW5kIGluc3RhbnRpYXRlIHNoaXBcbiAgbGV0IHNoaXA7XG4gIHRyeSB7XG4gICAgc2hpcCA9IG5ldyBTaGlwKHNoaXBOYW1lKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgYyA9IHNlbGVjdGVkQ29vcmQ7XG4gIGNvbnN0IHNoaXBQbGFjZW1lbnRDb29yZHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmh1bGwubGVuZ3RoOyBpKyspIHtcbiAgICBzaGlwUGxhY2VtZW50Q29vcmRzLnB1c2gobmV3IENvb3JkKGMueCwgYy55KSk7XG4gICAgaWYgKHZlcnRpY2FsKSBjLnkrKztcbiAgICBlbHNlIGMueCsrO1xuICB9XG5cbiAgLy8gdmFsaWRhdGUgZW5kIGNvb3Jkc1xuICBpZiAoIXZhbGlkYXRlQ29vcmRzKHNoaXBQbGFjZW1lbnRDb29yZHMuYXQoLTEpKSkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIHJldHVybiBzaGlwIHBsYWNlbWVudCBkZXRhaWxzXG4gIHJldHVybiB7XG4gICAgc2hpcCxcbiAgICBjb29yZHM6IHNoaXBQbGFjZW1lbnRDb29yZHMsXG4gIH07XG59XG5cbi8qKlxuICogVmFsaWRhdGUgYmFzaWMgY29vcmQgdmFsdWVzLlxuICogQHBhcmFtIHtDb29yZH0gY29vcmRzIG9iamVjdCBsaXRlcmFsIGNvbnRhaW5pbmcgeCBhbmQgeSBwcm9wZXJ0aWVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBjb29yZHMgYXJlIHZhbGlkLCBmYWxzZSBpZiBpbnZhbGlkXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlQ29vcmRzKGNvb3Jkcykge1xuICBpZiAodHlwZW9mIGNvb3Jkcy54ICE9PSAnbnVtYmVyJ1xuICAgIHx8IHR5cGVvZiBjb29yZHMueSAhPT0gJ251bWJlcidcbiAgICB8fCBjb29yZHMueCA8IDBcbiAgICB8fCBjb29yZHMueSA8IDBcbiAgICB8fCBjb29yZHMueCA+PSBCT0FSRF9TSVpFXG4gICAgfHwgY29vcmRzLnkgPj0gQk9BUkRfU0laRSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuZXhwb3J0IHsgQk9BUkRfU0laRSB9O1xuIiwiaW1wb3J0IHsgQ29vcmQgfSBmcm9tICcuL0dhbWVib2FyZC5qcyc7XG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncy5qc29uJztcblxuY29uc3QgQk9BUkRfU0laRSA9IHNldHRpbmdzWydnYW1lYm9hcmQtc2l6ZSddO1xuLyoqXG4gKiBDcmVhdGUgYSBwbGF5ZXIgb2JqZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGh1bWFuIHRydWUgaWYgdGhpcyBpcyBhIGh1bWFuIHBsYXllciwgZmFsc2UgaWYgaXQgaXMgYSBjb21wdXRlciBwbGF5ZXJcbiAqL1xuZnVuY3Rpb24gUGxheWVyKGh1bWFuKSB7XG4gIHRoaXMuaHVtYW4gPSBodW1hbjtcbiAgdGhpcy52YWxpZE1vdmVzID0gW107XG4gIGZvciAobGV0IHggPSAwOyB4IDwgQk9BUkRfU0laRTsgeCsrKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBCT0FSRF9TSVpFOyB5KyspIHtcbiAgICAgIHRoaXMudmFsaWRNb3Zlcy5wdXNoKCh0aGlzLmh1bWFuKSA/IG51bGwgOiBuZXcgQ29vcmQoeCwgeSkpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBJZiB0aGlzIFBsYXllciBpcyBodW1hbiwgdGhlbiByZXR1cm4gbnVsbC5cbiAqIElmIHRoaXMgcGxheWVyIGlzIGNvbXB1dGVyLCBzZWxlY3QgYSByYW5kb20gdmFsaWRNb3ZlIGFuZCByZXR1cm4gaXQuXG4gKiBJbiBlaXRoZXIgY2FzZSwgdGhlIG51bWJlciBvZiB2YWxpZE1vdmVzIGlzIHJlZHVjZWQgYnkgMS5cbiAqIEByZXR1cm5zIG51bGwgZm9yIGh1bWFuIHBsYXllcnMsIGFuZCBhIENvb3JkIG9iamVjdCBmb3IgY29tcHV0ZXJzXG4gKiBAdGhyb3cgaWYgdmFsaWRNb3Zlcy5sZW5ndGggaXMgMC5cbiAqL1xuUGxheWVyLnByb3RvdHlwZS5hdHRhY2sgPSBmdW5jdGlvbiBhdHRhY2soKSB7XG4gIGlmICh0aGlzLnZhbGlkTW92ZXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAodGhpcy5odW1hbilcbiAgICAgID8gdGhpcy52YWxpZE1vdmVzLnBvcCgpXG4gICAgICA6IHRoaXMudmFsaWRNb3Zlcy5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy52YWxpZE1vdmVzLmxlbmd0aCksIDEpLmF0KDApO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcignbm8gdmFsaWQgbW92ZXMgcmVtYWluaW5nJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJpbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncy5qc29uJztcblxuLyoqXG4gKiBDcmVhdGUgYSBzaGlwIG9iamVjdCwgYnkgc3BlY2lmeWluZyB0aGUgbmFtZSBvZiB0aGUgc2hpcCByZXF1aXJlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzaGlwIG5hbWUgb2Ygc2hpcCwgY29ycmVzcG9uZHMgdG8gYSBsZW5ndGguXG4gKi9cbmZ1bmN0aW9uIFNoaXAoc2hpcCkge1xuICB0aGlzLmxlbmd0aCA9IHZhbGlkYXRlU2hpcChzaGlwKTtcbiAgdGhpcy5uYW1lID0gc2hpcDtcbiAgdGhpcy5odWxsID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKS5maWxsKGZhbHNlKTtcbn1cblxuLyoqXG4gKiAnaGl0JyAvIGF0dGFjayB0aGlzIHNoaXAgYXQgc3BlY2lmaWVkIGluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb24gdGhlIHplcm8taW5kZXhlZCBwb3NpdG9uIG9mIHRoaXMgc2hpcHMgaHVsbCB0byByZWNvcmQgYSBoaXRcbiAqL1xuU2hpcC5wcm90b3R5cGUuaGl0ID0gZnVuY3Rpb24gaGl0KGluZGV4KSB7XG4gIGlmIChpbmRleCA+PSB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgc3BlY2lmaWVkIGhpdCBpbmRleCBcIiR7aW5kZXh9XCIgaXMgZ3JlYXRlciB0aGFuIGFsbG93YWJsZSBmb3IgYSBzaGlwIG9mIGxlbmd0aCAke3RoaXMubGVuZ3RofS5gKTtcbiAgfSBlbHNlIGlmIChpbmRleCA8IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHNwZWNpZmllZCBoaXQgaW5kZXggXCIke2luZGV4fVwiIGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgfVxuICB0aGlzLmh1bGxbaW5kZXhdID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzaGlwIGhhcyBzdW5rLCB0aGF0IGlzLCBpdCdzIGh1bGwgaGFzIGJlZW4gaGl0IGF0IGVhY2ggcG9zaXRpb25cbiAqIEByZXR1cm5zIHtib29sZWFufSByZXByZXNlbnRpbmcgaWYgdGhpcyBzaGlwIGhhcyBiZWVuIHN1bmtcbiAqL1xuU2hpcC5wcm90b3R5cGUuaXNTdW5rID0gZnVuY3Rpb24gaXNTdW5rKCkge1xuICByZXR1cm4gdGhpcy5odWxsLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gY3VycmVudCA9PT0gZmFsc2UgPyBmYWxzZSA6IHByZXYsIHRydWUpO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgdGhlIGxlbmd0aCBvZiBhIHNoaXAsIGJ5IGl0J3MgbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHNoaXAgYSBuYW1lIG9mIGEgc2hpcFxuICogQHJldHVybnMgdGhlIGxlbmd0aCBvZiBzYWlkIHNoaXBcbiAqIEB0aHJvd3MgRXJyb3IgaWYgc2hpcCBuYW1lIG5vdCByZWNvZ25pc2VkXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlU2hpcChzaGlwKSB7XG4gIC8vIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwc1R5cGVzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gKGN1cnJlbnQubmFtZSA9PT0gc2hpcCkgPyBjdXJyZW50Lmxlbmd0aCA6IHByZXYsIG51bGwpO1xuICBjb25zdCBzaGlwTGVuZ3RoID0gc2V0dGluZ3Muc2hpcHMucmVkdWNlKChwcmV2LCBjdXIpID0+IChjdXIubmFtZSA9PT0gc2hpcCkgPyBjdXIuc2l6ZSA6IHByZXYsIG51bGwpO1xuICBpZiAoc2hpcExlbmd0aCA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgc2hpcCBwYXJhbWV0ZXIgc3RyaW5nIG5vdCByZWNvZ25pc2VkOiBcIiR7c2hpcH1cIi4gQWxsb3dhYmxlIHZhbHVlczogJHtzZXR0aW5ncy5zaGlwcy5tYXAoZSA9PiBlLm5hbWUpfWApO1xuICB9XG4gIHJldHVybiBzaGlwTGVuZ3RoO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL29iai9zZXR0aW5ncy5qc29uJztcblxuY29uc3QgQk9BUkRfU0laRSA9IHNldHRpbmdzWydnYW1lYm9hcmQtc2l6ZSddO1xuXG4vKipcbiAqIEJ1aWxkIEJhdHRsZXNoaXBzIFVJXG4gKi9cbmZ1bmN0aW9uIGluaXRpYWxpemVET00oKSB7XG4gIC8vIHBsYWNlIGEgY291cGxlIG9mIHRlc3Qgc2hpcHNcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZEJvYXJkRWxlbWVudChCT0FSRF9TSVpFLCAnYm9hcmRQbGF5ZXInKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZEJvYXJkRWxlbWVudChCT0FSRF9TSVpFLCAnYm9hcmRDb21wdXRlcicpKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSB2aXN1YWwgcmVwcmVzZW50YXRpb24gb2YgYSBHYW1lYm9hcmRcbiAqIEBwYXJhbSB7bnVtYmVyfSBib2FyZFNpemUgdGhlIGxlbmd0aCBvZiB0aGUgZ2FtZWJvYXJkIHNpZGVzXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgaWQgYXR0cmlidXRlIG9mIHRoaXMgSFRNTCBlbGVtZW50XG4gKiBAcmV0dXJucyBIVE1MRGl2RWxlbWVudFxuICovXG5mdW5jdGlvbiBidWlsZEJvYXJkRWxlbWVudChib2FyZFNpemUsIGlkKSB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkLmNsYXNzTmFtZSA9ICdib2FyZCc7XG4gIGJvYXJkLmlkID0gaWQ7XG4gIGZvciAobGV0IHggPSAwOyB4IDwgYm9hcmRTaXplOyB4KyspIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cuY2xhc3NOYW1lID0gJ3Jvdyc7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBib2FyZFNpemU7IHkrKykge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzcXVhcmUuY2xhc3NOYW1lID0gJ2JvYXJkIHNxdWFyZSc7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxuICByZXR1cm4gYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckJvYXJkcyhnYW1lRGF0YSkge1xuICBjb25zdCBiMU9iaiA9IGdhbWVEYXRhWzBdLmJvYXJkO1xuICBjb25zdCBiMURvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2FyZFBsYXllcicpO1xuXG4gIGNvbnN0IGIyT2JqID0gZ2FtZURhdGFbMV0uYm9hcmQ7XG4gIGNvbnN0IGIyRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvYXJkQ29tcHV0ZXInKTtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBiMU9iai5zaXplOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGIxT2JqLnNpemU7IGNvbCsrKSB7XG4gICAgICBjb25zdCBwMVNxdWFyZU9iaiA9IGIxT2JqLmJvYXJkW3Jvd11bY29sXTtcbiAgICAgIGNvbnN0IHAxU3F1YXJlRG9tID0gYjFEb20uY2hpbGROb2Rlc1tyb3ddLmNoaWxkTm9kZXNbY29sXTtcbiAgICAgIGNvbnN0IHAyU3F1YXJlT2JqID0gYjJPYmouYm9hcmRbcm93XVtjb2xdO1xuICAgICAgY29uc3QgcDJTcXVhcmVEb20gPSBiMkRvbS5jaGlsZE5vZGVzW3Jvd10uY2hpbGROb2Rlc1tjb2xdO1xuXG4gICAgICBodW1hblNxdWFyZUhhbmRsZShwMVNxdWFyZU9iaiwgcDFTcXVhcmVEb20pO1xuICAgICAgY29uc3QgbWlzc0F0ID0gYjJPYmoubWlzc2VzLnJlZHVjZSgocHJldiwgY3VyKSA9PiAoY3VyLnggPT09IGNvbCAmJiBjdXIueSA9PT0gcm93KSA/IHRydWUgOiBwcmV2LCBmYWxzZSk7XG4gICAgICAvLyBjb25zdCBtaXNzQXQgPSBiMk9iai5taXNzZXMuaW5kZXhPZih7IHg6IGNvbCwgeTogcm93IH0pICE9PSAtMTtcbiAgICAgIGNvbnN0IHNoaXBBdFN0cnVjayA9IChwMlNxdWFyZU9iaiAhPT0gbnVsbCAmJiBwMlNxdWFyZU9iai5zaGlwLmh1bGxbcDJTcXVhcmVPYmouc2hpcEh1bGxJbmRleF0gPT09IHRydWUpO1xuICAgICAgaWYgKHNoaXBBdFN0cnVjaykge1xuICAgICAgICBwMlNxdWFyZURvbS5jbGFzc05hbWUgPSAnYm9hcmQgc3F1YXJlIHN0cnVjay1oaXQnO1xuICAgICAgfSBlbHNlIGlmIChtaXNzQXQpIHtcbiAgICAgICAgcDJTcXVhcmVEb20uY2xhc3NOYW1lID0gJ2JvYXJkIHNxdWFyZSBzdHJ1Y2stbWlzcyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwMlNxdWFyZURvbS5jbGFzc05hbWUgPSAnYm9hcmQgc3F1YXJlJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBodW1hblNxdWFyZUhhbmRsZShzcXVhcmVPYmosIHNxdWFyZURvbSkge1xuICAgIGlmIChzcXVhcmVPYmogPT09IG51bGwpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgc3F1YXJlRG9tLmNsYXNzTmFtZSA9ICdib2FyZCBzcXVhcmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIHNxdWFyZURvbS5jbGFzc05hbWUgPSAnYm9hcmQgc3F1YXJlIHNoaXAnO1xuICAgIH1cbiAgfVxufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgaW5pdGlhbGl6ZURPTSwgcmVuZGVyQm9hcmRzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBpbml0aWFsaXplRE9NIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSAnLi4vb2JqL0dhbWUuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9vYmovUGxheWVyJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi4vb2JqL0dhbWVib2FyZCc7XG5cbmluaXRpYWxpemVET00oKTtcbnN0YXJ0R2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9