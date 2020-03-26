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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\n\n\n\nconst tabSwitch = () => {\n  const content = document.getElementById('content');\n  const nav = document.createElement('nav');\n  nav.className = 'navbar navbar-expand-lg navbar-light custom';\n  content.appendChild(nav);\n\n  const btn = document.createElement('button');\n  btn.setAttribute('type', 'button');\n  btn.setAttribute('data-toggle', 'collapse');\n  btn.setAttribute('data-target', '#toggleNav');\n  btn.className = 'navbar-toggler sec';\n\n  const span = document.createElement('span');\n  span.className = 'navbar-toggler-icon';\n\n  nav.appendChild(btn);\n  btn.appendChild(span);\n  const container = document.createElement('div');\n  container.className = 'collapse navbar-collapse';\n  container.setAttribute('id', 'toggleNav');\n\n  nav.appendChild(container);\n\n  const ul = document.createElement('ul');\n  ul.className = 'navbar-nav p-2 mt-lg-0';\n  container.appendChild(ul);\n\n  const li = document.createElement('li');\n  li.className = 'nav-item mr-4 font-weight-bold';\n  ul.appendChild(li);\n\n  const a = document.createElement('a');\n  li.appendChild(a);\n\n  a.innerHTML = 'HOME';\n  a.addEventListener('click', () => {\n    content.innerHTML = '';\n    tabSwitch();\n    Object(_modules_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n  ul.appendChild(li);\n  li.appendChild(a);\n\n  const li2 = document.createElement('li');\n  li2.className = 'nav-item mr-4 font-weight-bold';\n  const a2 = document.createElement('a');\n  a2.innerHTML = 'CONTACT US';\n  a2.addEventListener('click', () => {\n    content.innerHTML = '';\n    tabSwitch();\n    Object(_modules_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n  ul.appendChild(li2);\n  li2.appendChild(a2);\n\n  const li3 = document.createElement('li');\n  li3.className = 'nav-item font-weight-bold';\n\n  const a3 = document.createElement('a');\n  a3.innerHTML = 'MENU';\n  a3.addEventListener('click', () => {\n    content.innerHTML = '';\n    tabSwitch();\n    Object(_modules_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n  ul.appendChild(li3);\n  li3.appendChild(a3);\n\n  return nav;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabSwitch);\n\ntabSwitch();\nObject(_modules_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contact = () => {\r\n  const content = document.getElementById('content');\r\n\r\n  const container = document.createElement('div');\r\n  container.className = 'container';\r\n  content.appendChild(container);\r\n\r\n  const formRow = document.createElement('div');\r\n  container.appendChild(formRow);\r\n\r\n  const iconsRow = document.createElement('div');\r\n  container.appendChild(iconsRow);\r\n\r\n  const form = document.createElement('form');\r\n  formRow.appendChild(form);\r\n\r\n  const formGroup = document.createElement('div');\r\n  form.appendChild(formGroup);\r\n\r\n  const formInput = document.createElement('textarea');\r\n  formGroup.appendChild(formInput);\r\n\r\n  const formBtn = document.createElement('button');\r\n  formBtn.className = 'btn btn-primary form-control mt-1 custom font-weight-bold hover';\r\n  formBtn.innerHTML = 'Feedback';\r\n\r\n\r\n  formInput.setAttribute('type', 'email');\r\n  formInput.className = 'form-control mt-4';\r\n  formInput.setAttribute('placeholder', 'Enter message here');\r\n  formInput.setAttribute('required', '');\r\n\r\n\r\n  const emailHelp = document.createElement('span');\r\n  emailHelp.className = 'form-text text-muted';\r\n  emailHelp.setAttribute('id', 'emailHelp');\r\n  emailHelp.innerHTML = 'We will never share your info with anyone';\r\n\r\n  formGroup.appendChild(emailHelp);\r\n  formGroup.appendChild(formBtn);\r\n\r\n  const iconsContainer = document.createElement('div');\r\n  iconsContainer.className = 'container';\r\n\r\n  const innerIconRow = document.createElement('div');\r\n  innerIconRow.className = 'row mt-4 d-flex justify-content-center';\r\n\r\n  iconsContainer.appendChild(innerIconRow);\r\n\r\n  const facebook = document.createElement('a');\r\n  facebook.setAttribute('href', 'https://web.facebook.com/daniel.addo.75873/');\r\n  const twitter = document.createElement('a');\r\n  twitter.setAttribute('href', 'https://twitter.com/DanielLarbiAdd1');\r\n  const whatsapp = document.createElement('a');\r\n  whatsapp.setAttribute('href', 'https://web.whatsapp.com/');\r\n  const linkedin = document.createElement('a');\r\n  linkedin.setAttribute('href', 'https://www.linkedin.com/in/daniel-larbi-addo/');\r\n\r\n  facebook.className = 'fa fa-facebook-square fa-2x p-4 bg-icon';\r\n  twitter.className = 'fa fa-twitter fa-2x p-4 bg-icon';\r\n  whatsapp.className = 'fa fa-whatsapp fa-2x p-4 bg-icon';\r\n  linkedin.className = 'fa fa-linkedin fa-2x p-4 bg-icon';\r\n\r\n  innerIconRow.append(facebook, twitter, whatsapp, linkedin);\r\n  container.appendChild(iconsContainer);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n//# sourceURL=webpack:///./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst home = () => {\r\n  const content = document.getElementById('content');\r\n\r\n  const container = document.createElement('div');\r\n  container.className = 'container main1';\r\n  content.appendChild(container);\r\n\r\n  const main = document.createElement('div');\r\n  main.className = 'main row pt-2 mt-2';\r\n  container.appendChild(main);\r\n\r\n  const introWrap = document.createElement('div');\r\n  introWrap.className = 'container';\r\n\r\n  const introR = document.createElement('div');\r\n  introR.className = 'row mt-4';\r\n\r\n  const introC4 = document.createElement('div');\r\n  introC4.className = 'col-xs-12 col-sm-12 col-md-5 col-lg-4 cb';\r\n\r\n  const aside = document.createElement('aside');\r\n  aside.className = 'jumbotron custom neu';\r\n\r\n  const introC8 = document.createElement('div');\r\n  introC8.className = 'col-xs-12 col-sm-12 col-md-7 col-lg-8 mb-3';\r\n\r\n  const sliderContainer = document.createElement('main');\r\n  sliderContainer.className = 'main-bg';\r\n\r\n  introWrap.appendChild(introR);\r\n  introR.append(introC4, introC8);\r\n  introC4.appendChild(aside);\r\n  introC8.appendChild(sliderContainer);\r\n\r\n  const heading = document.createElement('h2');\r\n  heading.innerHTML = `\r\n  <i class=\"fa fa-cutlery mt-3 mr-2\" aria-hidden=\"true\"></i><span class=\"mt-2\">YOU ARE WELCOME !!!</span><i class=\"fa fa-btc mt-3 ml-2\"></i>`;\r\n  heading.className = 'heading text-center';\r\n  main.appendChild(heading);\r\n\r\n  const text = ['We have a variety of local and continental dishes you can choose from',\r\n    'Free delivery within Accra and Tema', '+233207312909'];\r\n  for (let i = 0; i < text.length; i += 1) {\r\n    const element = document.createElement('p');\r\n    element.innerHTML = text[i];\r\n    aside.appendChild(element);\r\n  }\r\n  main.appendChild(introWrap);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst menu = () => {\n  const content = document.getElementById('content');\n  const firstDiv = document.createElement('div');\n  firstDiv.className = 'container';\n  content.appendChild(firstDiv);\n  const row = document.createElement('div');\n  row.className = 'row mt-4';\n  firstDiv.appendChild(row);\n  const col = document.createElement('div');\n  const col2 = document.createElement('div');\n  const col3 = document.createElement('div');\n  const col4 = document.createElement('div');\n  const col5 = document.createElement('div');\n  const col6 = document.createElement('div');\n  row.append(col, col2, col3, col4, col5, col6);\n  col.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select neu p-2';\n  col2.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select neu p-2';\n  col3.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select neu p-2';\n  col4.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select neu p-2';\n  col5.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select neu p-2';\n  col6.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select neu p-2';\n  const colSelect = document.querySelectorAll('.select');\n  const imgArr = ['res', 'res1', 'res2', 're1', 'res4', 're1', 're2'];\n  const desc = ['Jollof Rice', 'Banku and Okro', 'Akple and Fetri detsi', 'Beef Balls', 'Goat Soup', 'Salad'];\n  const price = [20, 44, 33, 23, 12, 56, 100, 54];\n  for (let i = 0; i < 6; i += 1) {\n    const description = `${`${desc[i]} `.concat(`$${price[i]}`)}`;\n\n    const pdt = document.createElement('div');\n    pdt.className = 'product';\n    colSelect[i].appendChild(pdt);\n\n    const img = new Image();\n    img.setAttribute('src', `Restaurant-Page/dist/images/${imgArr[i]}.jpg`);\n    img.className = 'img img-rounded';\n    pdt.appendChild(img);\n\n    const descrip = document.createElement('p');\n    descrip.className = 'description bg-icon font-weight-bold';\n    descrip.textContent = description;\n    pdt.appendChild(descrip);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack:///./src/modules/menu.js?");

/***/ })

/******/ });