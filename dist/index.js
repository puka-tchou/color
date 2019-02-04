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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: getApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getApp\", function() { return getApp; });\nvar app = {\n  namespace: \"color_app\",\n  images: JSON.parse(localStorage.getItem(\"color_app\"))\n};\n\nif (!app.images) {\n  app.images = [];\n} else {\n  app.images = app.images.images;\n}\n/**\r\n * @returns {Object}\r\n */\n\n\nfunction getApp() {\n  return app;\n}\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: randomBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomBackground\", function() { return randomBackground; });\n/**\r\n * Randomly change the background on page load.\r\n *\r\n * @description //TODO\r\n * @example //TODO\r\n * @param {number} i The number of images to pick from\r\n * (i.e 5 means 6 backgrounds to pick from).\r\n */\nfunction randomBackground(i) {\n  var imageNumber = randomInt(i);\n  var background = document.querySelector(\".background\");\n  background.style = \"background-image:url(assets/background/\" + imageNumber + \".webp)\";\n}\n/**\r\n * Randomly generates an integer, between 0 and max.\r\n *\r\n * @description //TODO\r\n * @example //TODO\r\n * @param {number} max The maximum of the generated number.\r\n * @returns {number} An integer between 0 and max.\r\n */\n\nfunction randomInt(max) {\n  return Math.floor(Math.random() * Math.floor(max));\n}\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/display-footer.js":
/*!*******************************!*\
  !*** ./src/display-footer.js ***!
  \*******************************/
/*! exports provided: displayFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayFooter\", function() { return displayFooter; });\n/* harmony import */ var _insert_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insert-element */ \"./src/insert-element.js\");\n\n/**\r\n * Display a list containing the extensions of files accepted.\r\n * \r\n * @description //TODO\r\n * @example //TODO\r\n */\n\nfunction displayFooter() {\n  var validExtensions = [\".jpg\", \".jpeg\", \".png\", \".gif\"];\n\n  for (var i = 0; i < validExtensions.length; i++) {\n    Object(_insert_element__WEBPACK_IMPORTED_MODULE_0__[\"insertElement\"])(\"li\", validExtensions[i], \"ul.js-extension-list\");\n  }\n}\n\n//# sourceURL=webpack:///./src/display-footer.js?");

/***/ }),

/***/ "./src/display-gallery.js":
/*!********************************!*\
  !*** ./src/display-gallery.js ***!
  \********************************/
/*! exports provided: displayImages, previewImage, deleteImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayImages\", function() { return displayImages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"previewImage\", function() { return previewImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteImage\", function() { return deleteImage; });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _insert_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insert-element */ \"./src/insert-element.js\");\n\n\nvar app = Object(_app__WEBPACK_IMPORTED_MODULE_0__[\"getApp\"])();\n/**\r\n * Display the images in a gallery and add eventListeners.\r\n *\r\n * @description //TODO\r\n * @example //TODO\r\n */\n\nfunction displayImages() {\n  var gallery = document.querySelector(\".js-gallery\");\n  gallery.innerHTML = \"\";\n\n  for (var key in app.images) {\n    var galleryItem = Object(_insert_element__WEBPACK_IMPORTED_MODULE_1__[\"insertElement\"])(\"a\", \"\", \".js-gallery\");\n    var deleteText = document.createTextNode(\"x\");\n    var deleteBtn = document.createElement(\"button\");\n    deleteBtn.appendChild(deleteText);\n    galleryItem.appendChild(deleteBtn);\n    galleryItem.className = \"image-item box-shadow transition\";\n    galleryItem.setAttribute(\"dataUrl\", app.images[key].url);\n    galleryItem.style = \"background-image: url(\" + app.images[key].url + \")\";\n    galleryItem.addEventListener(\"click\", previewImage);\n    deleteImage(deleteBtn, app.images[key]);\n  }\n}\n/**\r\n * Display an image in the preview zone when the user cliks it.\r\n *\r\n * @description //TODO\r\n * @example //TODO\r\n * @param {undefined} event The event triggered.\r\n */\n\nfunction previewImage(event) {\n  var preview = document.querySelector(\".js-image-preview\");\n  var url = event.target.getAttribute(\"dataUrl\");\n  preview.src = url;\n  preview.className = \"clicked js-image-preview item-center\";\n  preview.addEventListener(\"click\", removePreview);\n  var image = app.images.find(function (element) {\n    return url === element.url;\n  });\n  displayColor(image);\n}\n/**\r\n * Delete an image from the gallery when the users cliks on the button.\r\n *\r\n * @description //TODO\r\n * @example //TODO\r\n * @param {string} button The button to delete an image.\r\n * @param {Array} image The list of images.\r\n */\n\nfunction deleteImage(button, image) {\n  var preview = document.querySelector(\".js-image-preview\");\n  button.addEventListener(\"click\", function (event) {\n    event.stopPropagation();\n    var result = app.images.find(function (item) {\n      return item.url === image.url;\n    });\n    var key = app.images.indexOf(result);\n    app.images.splice(key, 1);\n    localStorage.setItem(app.namespace, JSON.stringify(app));\n    var gallery = document.querySelector(\".js-gallery\");\n    gallery.innerHTML = \"\";\n    displayImages();\n\n    if (preview.getAttribute(\"src\") === image.url) {\n      removePreview();\n      removeInside(\".js-color-list\");\n    }\n  });\n}\n/**\r\n * Removes the image from the preview zone when the user clicks it again.\r\n * \r\n * @description //TODO\r\n * @example //TODO\r\n */\n\nfunction removePreview() {\n  var preview = document.querySelector(\".clicked\");\n\n  if (preview) {\n    preview.className = \"js-image-preview item-center\";\n    preview.src = \"../assets/cat1.gif\";\n    removeInside(\".js-color-list\");\n  }\n}\n\nfunction displayColor(image) {\n  removeInside(\".js-color-list\");\n\n  for (var key in image.colors) {\n    Object(_insert_element__WEBPACK_IMPORTED_MODULE_1__[\"insertElement\"])(\"li\", image.colors[key].html_code, \".js-color-list\");\n  }\n}\n/**\r\n * Remove all that is inside a selector.\r\n * \r\n * @description //TODO\r\n * @example removeInside(\".css-selector\");\r\n * @param {string} selector The selector to target.\r\n */\n\n\nfunction removeInside(selector) {\n  document.querySelector(selector).innerHTML = \"\";\n}\n\n//# sourceURL=webpack:///./src/display-gallery.js?");

/***/ }),

/***/ "./src/display-menu.js":
/*!*****************************!*\
  !*** ./src/display-menu.js ***!
  \*****************************/
/*! exports provided: displayMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayMenu\", function() { return displayMenu; });\n/* harmony import */ var _insert_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insert-element */ \"./src/insert-element.js\");\n\n/**\r\n * @type {Object}\r\n */\n\nvar menuItems = [{\n  name: \"accueil\",\n  url: \"index.html\"\n}, {\n  name: \"galerie\",\n  url: \"gallery.html\"\n}, {\n  name: \"github\",\n  url: \"#\"\n}, {\n  name: \"documentation\",\n  url: \"/docs/index.html\"\n}];\n/**\r\n * Display the menu links.\r\n * \r\n * @description Display the menu links.\r\n * @example displayMenu(menuItems);\r\n * @param {Array} menu The array containing menu objects.\r\n */\n\nfunction displayMenu() {\n  for (var key in menuItems) {\n    var menuItem = Object(_insert_element__WEBPACK_IMPORTED_MODULE_0__[\"insertElement\"])(\"li\", \"\", \".js-menu\");\n    var menuLink = Object(_insert_element__WEBPACK_IMPORTED_MODULE_0__[\"insertElement\"])(\"a\", menuItems[key].name);\n    menuLink.setAttribute(\"class\", \"nav-link\");\n    menuLink.setAttribute(\"href\", menuItems[key].url);\n    menuItem.setAttribute(\"class\", \"nav-item\");\n    menuItem.appendChild(menuLink);\n  }\n\n  return true;\n}\n\n//# sourceURL=webpack:///./src/display-menu.js?");

/***/ }),

/***/ "./src/display-upload.js":
/*!*******************************!*\
  !*** ./src/display-upload.js ***!
  \*******************************/
/*! exports provided: displayUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayUpload\", function() { return displayUpload; });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _insert_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insert-element */ \"./src/insert-element.js\");\n/* harmony import */ var _upload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-image */ \"./src/upload-image.js\");\n\n\n\n/**\r\n * Display the upload button and the title and add a onclick event to the\r\n * button.\r\n *\r\n * @description //TODO\r\n * @example //TODO\r\n * @param {number} max The maximum number of images accepted in the gallery.\r\n */\n\nfunction displayUpload(max) {\n  var app = Object(_app__WEBPACK_IMPORTED_MODULE_0__[\"getApp\"])();\n  var uploadContainer = document.querySelector(\".js-upload-container\");\n  var uploadButton = Object(_insert_element__WEBPACK_IMPORTED_MODULE_1__[\"insertElement\"])(\"a\", \"\", \".js-upload-container\");\n  var uploadButtonText = document.createTextNode(\"upload\");\n  var form = Object(_insert_element__WEBPACK_IMPORTED_MODULE_1__[\"insertElement\"])(\"form\");\n  var inputField = Object(_insert_element__WEBPACK_IMPORTED_MODULE_1__[\"insertElement\"])(\"input\");\n  var submitField = Object(_insert_element__WEBPACK_IMPORTED_MODULE_1__[\"insertElement\"])(\"input\");\n  uploadButton.role = \"button\";\n  uploadButton.className = \"btn--success\";\n  form.action = \"\";\n  form.method = \"GET\";\n  inputField.type = \"url\";\n  inputField.required = \"required\";\n  inputField.name = \"url\";\n  submitField.type = \"submit\";\n  submitField.value = \"envoyer\";\n\n  if (app.images.length > max) {\n    uploadButton.className = \"btn--warning\";\n    uploadButtonText = document.createTextNode(\"supprimer une image\");\n  }\n\n  uploadButton.appendChild(uploadButtonText);\n  form.appendChild(inputField);\n  form.appendChild(submitField);\n  uploadContainer.appendChild(form);\n  Object(_upload_image__WEBPACK_IMPORTED_MODULE_2__[\"onFileChange\"])(uploadButton);\n  Object(_upload_image__WEBPACK_IMPORTED_MODULE_2__[\"onFormSubmit\"])(form);\n}\n\n//# sourceURL=webpack:///./src/display-upload.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-menu */ \"./src/display-menu.js\");\n/* harmony import */ var _display_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-footer */ \"./src/display-footer.js\");\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\n/* harmony import */ var _display_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-upload */ \"./src/display-upload.js\");\n/* harmony import */ var _display_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display-gallery */ \"./src/display-gallery.js\");\n\n\n\n\n\nObject(_display_menu__WEBPACK_IMPORTED_MODULE_0__[\"displayMenu\"])();\nObject(_display_footer__WEBPACK_IMPORTED_MODULE_1__[\"displayFooter\"])();\nObject(_display_upload__WEBPACK_IMPORTED_MODULE_3__[\"displayUpload\"])(10);\nObject(_display_gallery__WEBPACK_IMPORTED_MODULE_4__[\"displayImages\"])();\nObject(_background__WEBPACK_IMPORTED_MODULE_2__[\"randomBackground\"])(5);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/insert-element.js":
/*!*******************************!*\
  !*** ./src/insert-element.js ***!
  \*******************************/
/*! exports provided: insertElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertElement\", function() { return insertElement; });\n/**\r\n * Create a new HTMLElement and append it in the given parent.\r\n * \r\n * @description Creates a HTML tag using the first parameter. If the second\r\n * parameter is set, append text inside this tag. If the third parameter is\r\n * set, append the created tag inside the parent.\r\n * @example insertElement(\"a\", \"Click me!\", \".a-container\");\r\n * @param {string} tag The HTML tag to create.\r\n * @param {string} text The text that will be displayed inside the tag.\r\n * E.g. <a>Text</a>.\r\n * @param {string} parent The parent of the created tag. The tag will be\r\n * inserted into this parent.\r\n * @returns {HTMLElement} The created HTMLElement.\r\n */\nfunction insertElement(tag, text, parent) {\n  if (!tag || \"string\" !== typeof tag) {\n    throw new Error(\"insertElement requires a tag\\n\" + tag + \" is not allowed as a tag parameter\");\n  }\n\n  tag = document.createElement(tag);\n\n  if (\"undefined\" !== typeof text) {\n    tag.appendChild(document.createTextNode(text));\n  }\n\n  if (\"undefined\" !== typeof parent) {\n    parent = document.querySelector(parent);\n    parent.appendChild(tag);\n  }\n\n  return tag;\n}\n\n//# sourceURL=webpack:///./src/insert-element.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main.scss?");

/***/ }),

/***/ "./src/push-image.js":
/*!***************************!*\
  !*** ./src/push-image.js ***!
  \***************************/
/*! exports provided: pushImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pushImage\", function() { return pushImage; });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n/**\r\n * Push images in the image table.\r\n * \r\n * @description //TODO\r\n * @example //TODO\r\n * @param {string} url The (relative or absolute) path to the file.\r\n * @param {Object} colors The colors of the image.\r\n */\n\nfunction pushImage(url, colors) {\n  var app = Object(_app__WEBPACK_IMPORTED_MODULE_0__[\"getApp\"])();\n  app.images.push({\n    url: url,\n    colors: colors\n  });\n  localStorage.setItem(app.namespace, JSON.stringify(app));\n}\n\n//# sourceURL=webpack:///./src/push-image.js?");

/***/ }),

/***/ "./src/upload-image.js":
/*!*****************************!*\
  !*** ./src/upload-image.js ***!
  \*****************************/
/*! exports provided: onFileChange, onFormSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onFileChange\", function() { return onFileChange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onFormSubmit\", function() { return onFormSubmit; });\n/* harmony import */ var _push_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./push-image */ \"./src/push-image.js\");\n/* harmony import */ var _display_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-gallery */ \"./src/display-gallery.js\");\n/* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-service */ \"./src/web-service.js\");\n\n\n\n/**\r\n * On file change, send the file to the web service.\r\n * \r\n * @description //TODO\r\n * @example //TODO\r\n * @param {HTMLElement} button The button that is clicked by the user.\r\n */\n\nfunction onFileChange(button) {\n  var file = document.querySelector(\"#js-file\");\n\n  button.onclick = function () {\n    file.click();\n  };\n\n  file.addEventListener(\"change\", function (event) {\n    var formData = new FormData();\n    formData.append(\"image\", file.files[0]);\n    Object(_web_service__WEBPACK_IMPORTED_MODULE_2__[\"queryWebService\"])(\"POST\", null, formData, function (response) {\n      var reader = new FileReader();\n\n      reader.onloadend = function (event) {\n        var file = event.target.result;\n        Object(_push_image__WEBPACK_IMPORTED_MODULE_0__[\"pushImage\"])(file, JSON.parse(response).result.colors.image_colors);\n        Object(_display_gallery__WEBPACK_IMPORTED_MODULE_1__[\"displayImages\"])();\n        document.querySelector(\"div.js-gallery a.image-item:last-child\").click();\n      };\n\n      reader.readAsDataURL(file.files[0]);\n    });\n    return event;\n  });\n}\n/**\r\n * On url input, send the file to the web service.\r\n * \r\n * @description //TODO\r\n * @example //TODO\r\n * @param {HTMLFormElement} form The form that is submitted.\r\n */\n\nfunction onFormSubmit(form) {\n  form.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    Object(_web_service__WEBPACK_IMPORTED_MODULE_2__[\"queryWebService\"])(\"GET\", form.elements.url.value, null, function (response, url) {\n      Object(_push_image__WEBPACK_IMPORTED_MODULE_0__[\"pushImage\"])(url, JSON.parse(response).result.colors.image_colors);\n      Object(_display_gallery__WEBPACK_IMPORTED_MODULE_1__[\"displayImages\"])();\n      document.querySelector(\"div.js-gallery a.image-item:last-child\").click();\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/upload-image.js?");

/***/ }),

/***/ "./src/web-service.js":
/*!****************************!*\
  !*** ./src/web-service.js ***!
  \****************************/
/*! exports provided: queryWebService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryWebService\", function() { return queryWebService; });\n/**\r\n * Connect to the web service to get images colors.\r\n * \r\n * @description //TODO\r\n * @example //TODO\r\n * @param {string} method The used to connect to the web service.\r\n * @param {string} query The complete query to append at the end of the url\r\n * e.g \"&Yay\".\r\n * @param {FormData} body The value that will go in the xhr.send() statement.\r\n * @param {*} success Something that will be executed when the request is loaded.\r\n */\nfunction queryWebService(method, query, body, success) {\n  var xhr = new XMLHttpRequest();\n\n  if (null === query) {\n    xhr.open(method, \"https://api.imagga.com/v2/colors?extract_object_colors=0\");\n  } else {\n    xhr.open(method, \"https://api.imagga.com/v2/colors?extract_object_colors=0&image_url=\" + query);\n  }\n\n  xhr.setRequestHeader(\"authorization\", \"Basic YWNjX2VhMWFiMDhmM2JjMmI0NjpmNjU1NTRjMjlkZmU2MjBkZjZkNzlhOWI4NTZjOGRjYQ==\");\n\n  xhr.onloadend = function (event) {\n    if (200 === xhr.status) {\n      success(xhr.response, query);\n    }\n  };\n\n  xhr.send(body);\n}\n\n//# sourceURL=webpack:///./src/web-service.js?");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/index.js ./src/main.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/main.scss */\"./src/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/main.scss?");

/***/ })

/******/ });