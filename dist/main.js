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

/***/ "./src/component/contact.js":
/*!**********************************!*\
  !*** ./src/component/contact.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable linebreak-style */\r\nconst contact = () => {\r\n  const content = document.getElementById('content');\r\n\r\n  const container = document.createElement('div');\r\n  container.className = 'contactContainer';\r\n  content.appendChild(container);\r\n\r\n  const textContent = document.createElement('div');\r\n  textContent.className = 'textContent';\r\n  container.appendChild(textContent);\r\n\r\n  const contactHeading = document.createElement('h1');\r\n  contactHeading.innerText = 'CONTACT';\r\n  textContent.appendChild(contactHeading);\r\n\r\n  const subText = document.createElement('h2');\r\n  subText.innerText = 'RESTAURANT KROMOSOME';\r\n  textContent.appendChild(subText);\r\n\r\n  const elementText = ['ACCRA', 'DANSOMAN FIRST-STOP', 'GHANA', '+233 207 312 909', 'kromo@info.com'];\r\n\r\n  for (let i = 0; i < elementText.length; i += 1) {\r\n    const contactElement = document.createElement('h4');\r\n    contactElement.innerText = elementText[i];\r\n    textContent.appendChild(contactElement);\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n//# sourceURL=webpack:///./src/component/contact.js?");

/***/ }),

/***/ "./src/component/main.js":
/*!*******************************!*\
  !*** ./src/component/main.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable linebreak-style */\r\n/* eslint-disable indent */\r\n/* eslint-disable linebreak-style */\r\nconst main = () => {\r\n  const content = document.getElementById('content');\r\n\r\n  const container = document.createElement('div');\r\n  container.className = 'mainContainer';\r\n  content.appendChild(container);\r\n  // console.log(container);\r\n  const main = document.createElement('div');\r\n  main.className = 'main row';\r\n  container.appendChild(main);\r\n  // console.log(main);\r\n  const heading = document.createElement('h2');\r\n  heading.innerHTML = 'WELCOME EVERYBODY!';\r\n  heading.classList.add('heading');\r\n  main.appendChild(heading);\r\n\r\n  const text = ['We have a variety of local and continental dishes you can choose from',\r\n      'Enjoy the beauty of our siren environment and great food'];\r\n  console.log(text)\r\n  for (let i = 0; i < text.length; i += 1) {\r\n    const element = document.createElement('p');\r\n    element.innerHTML = text[i];\r\n    main.appendChild(element);\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n//# sourceURL=webpack:///./src/component/main.js?");

/***/ }),

/***/ "./src/component/menu.js":
/*!*******************************!*\
  !*** ./src/component/menu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable linebreak-style */\r\n/* eslint-disable no-trailing-spaces */\r\n/* eslint-disable linebreak-style */\r\n// import styles from '../css/style.css';\r\n\r\nconst menu = () => {\r\n  const content = document.getElementById('content');\r\n  // container.className = styles['menu-main'];\r\n\r\n  const firstDiv = document.createElement('div');\r\n  firstDiv.className = 'container';\r\n\r\n  content.appendChild(firstDiv);\r\n\r\n  const row = document.createElement('div');\r\n  row.className = 'row mt-4';\r\n\r\n  firstDiv.appendChild(row);\r\n\r\n  const col = document.createElement('div');\r\n  const col2 = document.createElement('div');\r\n  const col3 = document.createElement('div');\r\n  const col4 = document.createElement('div');\r\n  const col5 = document.createElement('div');\r\n  const col6 = document.createElement('div');\r\n\r\n  row.appendChild(col);\r\n  row.appendChild(col2);\r\n  row.appendChild(col3);\r\n  row.appendChild(col4);\r\n  row.appendChild(col5);\r\n  row.appendChild(col6);\r\n  \r\n  col.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select';\r\n  col2.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select';\r\n  col3.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select';\r\n  col4.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select';\r\n  col5.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select';\r\n  col6.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select';\r\n\r\n  let colSelect = document.querySelectorAll('.select');\r\n  // const menuContainer = document.createElement('div');\r\n  // menuContainer.className = 'menuContainer';\r\n  \r\n  // console.log(content);\r\n  const imgArr = ['res', 'res1', 'res2', 're1', 'res4', 're1', 're2'];\r\n  const desc = ['Jollof Rice', 'Banku and Okro', 'Akple and Fetri detsi', 'Beef Balls', 'Goat Soup', 'Salad'];\r\n  const price = [20, 44, 33, 23, 12, 56, 100, 54];\r\n  for (let i = 0; i < 6; i += 1) {\r\n    \r\n    const description = `${desc[i] + ' ' + '$' + price[i]}`;\r\n\r\n    const pdt = document.createElement('div');\r\n    pdt.className = 'product';\r\n    colSelect[i].appendChild(pdt);\r\n\r\n    const img = new Image();\r\n    img.setAttribute('src', `/dist/images/${imgArr[i]}.jpg`);\r\n    img.className = 'img img-rounded';\r\n    pdt.appendChild(img);\r\n\r\n    const descrip = document.createElement('p');\r\n    descrip.className = 'description';\r\n    descrip.innerText = description;\r\n    pdt.appendChild(descrip);\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack:///./src/component/menu.js?");

/***/ }),

/***/ "./src/component/nav.js":
/*!******************************!*\
  !*** ./src/component/nav.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/component/menu.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./src/component/main.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/component/contact.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\n\r\nconst myNav = () => {\r\n  const content = document.getElementById('content');\r\n  const nav = document.createElement('nav');\r\n  nav.className = 'navbar navbar-expand-lg navbar-light bg-light custom';\r\n  content.appendChild(nav);\r\n\r\n  const btn = document.createElement('button');\r\n  btn.setAttribute('type', 'button');\r\n  btn.setAttribute('data-toggle', 'collapse');\r\n  btn.setAttribute('data-target', '#toggleNav');\r\n  btn.className = 'navbar-toggler';\r\n\r\n  const span = document.createElement('span');\r\n  span.className = 'navbar-toggler-icon';\r\n\r\n  nav.appendChild(btn);\r\n  btn.appendChild(span);\r\n  const container = document.createElement('div');\r\n  container.className = 'collapse navbar-collapse';\r\n  container.setAttribute('id', 'toggleNav');\r\n\r\n  nav.appendChild(container);\r\n\r\n\r\n  // const navItems = document.createElement('nav');\r\n  // nav.appendChild(navItems);\r\n\r\n  const ul = document.createElement('ul');\r\n  ul.className = 'navbar-nav mr-auto mt-2 mt-lg-0';\r\n  container.appendChild(ul);\r\n\r\n  const li = document.createElement('li');\r\n  li.className = 'nav-item';\r\n  ul.appendChild(li);\r\n\r\n  const a = document.createElement('a');\r\n  a.className = 'nav-link';\r\n  li.appendChild(a);\r\n\r\n  a.innerHTML = 'Home';\r\n  a.addEventListener('click', () => {\r\n    content.innerHTML = '';\r\n    myNav();\r\n    Object(_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n  ul.appendChild(li);\r\n  li.appendChild(a);\r\n\r\n  const li2 = document.createElement('li');\r\n  li2.className = 'nav-item';\r\n  const a2 = document.createElement('a');\r\n  a2.innerHTML = 'CONTACT US';\r\n  a2.addEventListener('click', () => {\r\n    content.innerHTML = '';\r\n    myNav();\r\n    Object(_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n  ul.appendChild(li2);\r\n  li2.appendChild(a2);\r\n\r\n  const li3 = document.createElement('li');\r\n  li3.className = 'nav-item';\r\n\r\n  const a3 = document.createElement('a');\r\n  a3.innerHTML = 'MENU';\r\n  a3.addEventListener('click', () => {\r\n    content.innerHTML = '';\r\n    myNav();\r\n    Object(_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n  ul.appendChild(li3);\r\n  li3.appendChild(a3);\r\n\r\n  return nav;\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (myNav);\n\n//# sourceURL=webpack:///./src/component/nav.js?");

/***/ }),

/***/ "./src/component/view.js":
/*!*******************************!*\
  !*** ./src/component/view.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/component/nav.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./src/component/main.js\");\n/* eslint-disable linebreak-style */\r\n/* eslint-disable no-multiple-empty-lines */\r\n/* eslint-disable linebreak-style */\r\n/* eslint-disable semi */\r\n/* eslint-disable no-console */\r\n/* eslint-disable indent */\r\n/* eslint-disable linebreak-style */\r\n/* eslint-disable no-unused-expressions */\r\n// import main from './layout/main';\r\n\r\n// const content = document.querySelector('#content');\r\n// // content.style.backgroundImage = \"url('re.jpg')\";\r\n// content.appendChild(main());\r\n\r\n\r\n\r\n\r\n\r\nconst view = (() => {\r\n    Object(_nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    Object(_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n    return {\r\n        myNav: _nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n        main: _main__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    }\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (view);\n\n//# sourceURL=webpack:///./src/component/view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/view */ \"./src/component/view.js\");\n/* eslint-disable no-multiple-empty-lines */\r\n/* eslint-disable linebreak-style */\r\n/* eslint-disable semi */\r\n/* eslint-disable no-console */\r\n/* eslint-disable indent */\r\n/* eslint-disable linebreak-style */\r\n/* eslint-disable no-unused-expressions */\r\n// import main from './layout/main';\r\n\r\n\r\n\r\n\r\n\r\n\r\nObject(_component_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });