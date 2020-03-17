/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/main */ \"./src/layout/main.js\");\n/* eslint-disable no-multiple-empty-lines */\r\n/* eslint-disable linebreak-style */\r\n/* eslint-disable semi */\r\n/* eslint-disable no-console */\r\n/* eslint-disable indent */\r\n/* eslint-disable linebreak-style */\r\n/* eslint-disable no-unused-expressions */\r\n\r\n\r\nconst content = document.querySelector('#content');\r\ncontent.appendChild(Object(_layout_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/layout/contactUs.js":
/*!*********************************!*\
  !*** ./src/layout/contactUs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable linebreak-style */\r\n/* eslint-disable indent */\r\n/* eslint-disable no-undef */\r\n/* eslint-disable template-tag-spacing */\r\n/* eslint-disable no-unused-expressions */\r\nconst contactUs = () => {\r\n  const content = document.querySelector('#content');\r\n  const contact = document.createElement('div');\r\n\r\n  content.appendChild(contact);\r\n\r\n  contact.innerHTML = `\r\n    <div class=\"contact-wrapper\">\r\n        <div>You can contact us on the following: facebook instagram phone </div>\r\n    </div>\r\n  `;\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (contactUs);\n\n//# sourceURL=webpack:///./src/layout/contactUs.js?");

/***/ }),

/***/ "./src/layout/home.js":
/*!****************************!*\
  !*** ./src/layout/home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable linebreak-style */\r\n/* eslint-disable arrow-body-style */\r\n/* eslint-disable linebreak-style */\r\nconst home = () => {\r\n  const content = document.querySelector('#content');\r\n  const homePage = document.createElement('div');\r\n\r\n  content.appendChild(homePage);\r\n\r\n  homePage.innerHTML = `\r\n    <h2>This is testing</h2>\r\n  `;\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./src/layout/home.js?");

/***/ }),

/***/ "./src/layout/main.js":
/*!****************************!*\
  !*** ./src/layout/main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/layout/nav.js\");\n/* eslint-disable semi */\r\n/* eslint-disable import/no-cycle */\r\n/* eslint-disable linebreak-style */\r\n/* eslint-disable indent */\r\n/* eslint-disable no-console */\r\n\r\n\r\n\r\n/* eslint-disable linebreak-style */\r\nconst main = () => {\r\n    Object(_nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n//# sourceURL=webpack:///./src/layout/main.js?");

/***/ }),

/***/ "./src/layout/menu.js":
/*!****************************!*\
  !*** ./src/layout/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst menu = () => {\r\n    console.log('hi am menu');\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack:///./src/layout/menu.js?");

/***/ }),

/***/ "./src/layout/nav.js":
/*!***************************!*\
  !*** ./src/layout/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/layout/main.js\");\n/* harmony import */ var _contactUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactUs */ \"./src/layout/contactUs.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/layout/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/layout/menu.js\");\n/* eslint-disable no-undef */\r\n/* eslint-disable linebreak-style */\r\n/* eslint-disable import/no-cycle */\r\n/* eslint-disable no-unused-vars */\r\n/* eslint-disable no-multiple-empty-lines */\r\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst nav = () => {\r\n  const content = document.getElementById('content');\r\n  const nav = document.createElement('div');\r\n  nav.className = 'nav';\r\n  content.appendChild(nav);\r\n  // const logo = document.createElement('img');\r\n  // logo.setAttribute('src', '../dist/images/re.jpg');\r\n  // nav.appendChild(logo);\r\n  const navItems = document.createElement('div');\r\n  navItems.className = 'nav-items';\r\n  nav.appendChild(navItems);\r\n\r\n  const element = document.createElement('span');\r\n  element.innerHTML = 'HOME';\r\n  element.addEventListener('click', () => {\r\n    content.innerHTML = '';\r\n    Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    content.appendChild(Object(_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n  });\r\n  navItems.appendChild(element);\r\n\r\n  const element2 = document.createElement('SPAN');\r\n  element2.innerHTML = 'CONTACT US';\r\n  element2.addEventListener('click', () => {\r\n    content.innerHTML = '';\r\n    Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    Object(_contactUs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n  navItems.appendChild(element2);\r\n\r\n  const element3 = document.createElement('SPAN');\r\n  element3.innerHTML = 'MENU';\r\n  element3.addEventListener('click', () => {\r\n    content.innerHTML = '';\r\n    Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    Object(_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  });\r\n  navItems.appendChild(element3);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (nav);\n\n//# sourceURL=webpack:///./src/layout/nav.js?");

/***/ })

/******/ });