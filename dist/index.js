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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getApp\", function() { return getApp; });\nvar app = {\n  namespace: 'color_app',\n  images: JSON.parse(localStorage.getItem('color_app'))\n}; // If app.images is not defined, set it to [], else give it the value of app.images.images\n\napp.images = !app.images ? [] : app.images.images;\n/**\n * @returns {Object}\n */\n\nfunction getApp() {\n  return app;\n}\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/delete-image.js":
/*!*****************************!*\
  !*** ./src/delete-image.js ***!
  \*****************************/
/*! exports provided: deleteImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteImage\", function() { return deleteImage; });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _display_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-gallery */ \"./src/display-gallery.js\");\n/* harmony import */ var _remove_inside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-inside */ \"./src/remove-inside.js\");\n\n\n\nvar app = Object(_app__WEBPACK_IMPORTED_MODULE_0__[\"getApp\"])();\n/**\n * Delete an image from the gallery when the users cliks on the button.\n *\n * @description Delete an image from the gallery when the users cliks on the button.\n * @example deleteImage(button, element);\n * @param {string} button The button to delete an image.\n * @param {Array} image The list of images.\n */\n\nfunction deleteImage(button, image) {\n  var preview = document.querySelector('.js-image-preview');\n  button.addEventListener('click', function (event) {\n    event.stopPropagation();\n\n    if (window.confirm(\"Voulez-vraiment supprimer l'image ?\")) {\n      var result = app.images.find(function (item) {\n        return item.url === image.url;\n      });\n      var key = app.images.indexOf(result);\n      app.images.splice(key, 1);\n      localStorage.setItem(app.namespace, JSON.stringify(app));\n      var gallery = document.querySelector('.js-gallery');\n      gallery.innerHTML = '';\n      Object(_display_gallery__WEBPACK_IMPORTED_MODULE_1__[\"displayImages\"])();\n\n      if (preview.getAttribute('src') === image.url) {\n        Object(_display_gallery__WEBPACK_IMPORTED_MODULE_1__[\"removePreview\"])();\n        Object(_remove_inside__WEBPACK_IMPORTED_MODULE_2__[\"removeInside\"])('.js-color-list');\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/delete-image.js?");

/***/ }),

/***/ "./src/display-footer.js":
/*!*******************************!*\
  !*** ./src/display-footer.js ***!
  \*******************************/
/*! exports provided: displayFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayFooter\", function() { return displayFooter; });\n/* harmony import */ var _insert_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insert-element */ \"./src/insert-element.js\");\n\n/**\n * Display a list containing the extensions of files accepted.\n *\n * @description Display a list containing the files accepted in the footer.\n */\n\nfunction displayFooter() {\n  var validExtensions = ['.jpg', '.jpeg', '.png', '.gif'];\n  validExtensions.forEach(function (value) {\n    Object(_insert_element__WEBPACK_IMPORTED_MODULE_0__[\"insertElement\"])('li', value, 'ul.js-extension-list');\n  });\n}\n\n//# sourceURL=webpack:///./src/display-footer.js?");

/***/ }),

/***/ "./src/display-gallery.js":
/*!********************************!*\
  !*** ./src/display-gallery.js ***!
  \********************************/
/*! exports provided: removePreview, previewImage, displayImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removePreview\", function() { return removePreview; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"previewImage\", function() { return previewImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayImages\", function() { return displayImages; });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _insert_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insert-element */ \"./src/insert-element.js\");\n/* harmony import */ var _delete_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-image */ \"./src/delete-image.js\");\n/* harmony import */ var _remove_inside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove-inside */ \"./src/remove-inside.js\");\n\n\n\n\nvar app = Object(_app__WEBPACK_IMPORTED_MODULE_0__[\"getApp\"])();\n/**\n * Removes the image from the preview zone when the user clicks it.\n *\n * @description Removes the image from the preview zone when the user clicks it.\n * @example removePreview();\n */\n\nfunction removePreview() {\n  var preview = document.querySelector('.clicked');\n\n  if (preview) {\n    preview.className = 'js-image-preview item-center';\n    preview.src = '../assets/cat1.gif';\n    Object(_remove_inside__WEBPACK_IMPORTED_MODULE_3__[\"removeInside\"])('.js-color-list');\n  }\n}\n/**\n * @description Display the color list of the image in the preview zone.\n * @param {Object} image The object containing the image that is clicked.\n */\n\nfunction displayColor(image) {\n  Object(_remove_inside__WEBPACK_IMPORTED_MODULE_3__[\"removeInside\"])('.js-color-list');\n  image.colors.forEach(function (element) {\n    Object(_insert_element__WEBPACK_IMPORTED_MODULE_1__[\"insertElement\"])('li', element.html_code, '.js-color-list');\n  });\n}\n/**\n * Display an image in the preview zone when the user cliks it.\n *\n * @description Display an image in the preview zone when the user cliks it.\n * @example target.addEventListener('click', previewImage);\n * @param {Object} event The event triggered.\n */\n\n\nfunction previewImage(event) {\n  var preview = document.querySelector('.js-image-preview');\n  var url = event.target.getAttribute('dataUrl');\n  preview.src = url;\n  preview.className = 'clicked js-image-preview item-center';\n  preview.addEventListener('click', removePreview);\n  var image = app.images.find(function (element) {\n    return url === element.url;\n  });\n  displayColor(image);\n}\n/**\n * Display the images in a gallery and add eventListeners.\n *\n * @description Display the images in a gallery and add eventListeners.\n * @example displayImages();\n */\n\nfunction displayImages() {\n  var gallery = document.querySelector('.js-gallery');\n  gallery.innerHTML = '';\n  app.images.forEach(function (element) {\n    var galleryItem = Object(_insert_element__WEBPACK_IMPORTED_MODULE_1__[\"insertElement\"])('a', '', '.js-gallery');\n    var deleteBtn = Object(_insert_element__WEBPACK_IMPORTED_MODULE_1__[\"insertElement\"])('button', 'x', galleryItem);\n    deleteBtn.className = 'btn--danger';\n    galleryItem.className = 'image-item box-shadow transition';\n    galleryItem.setAttribute('dataUrl', element.url);\n    galleryItem.style = \"background-image: url(\".concat(element.url, \")\");\n    galleryItem.addEventListener('click', previewImage);\n    Object(_delete_image__WEBPACK_IMPORTED_MODULE_2__[\"deleteImage\"])(deleteBtn, element);\n  });\n}\n\n//# sourceURL=webpack:///./src/display-gallery.js?");

/***/ }),

/***/ "./src/display-menu.js":
/*!*****************************!*\
  !*** ./src/display-menu.js ***!
  \*****************************/
/*! exports provided: displayMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayMenu\", function() { return displayMenu; });\n/* harmony import */ var _insert_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insert-element */ \"./src/insert-element.js\");\n\n/**\n * @type {Object}\n */\n\nvar menuItems = [{\n  name: 'accueil',\n  url: 'index.html'\n}, {\n  name: 'galerie',\n  url: 'gallery.html'\n}, {\n  name: 'github',\n  url: '#'\n}, {\n  name: 'documentation',\n  url: '/docs/index.html'\n}];\n/**\n * Display the menu links.\n *\n * @description Display the menu links.\n * @example displayMenu(menuItems);\n * @param {Array} menu The array containing menu objects.\n */\n\nfunction displayMenu() {\n  menuItems.forEach(function (element) {\n    var menuItem = Object(_insert_element__WEBPACK_IMPORTED_MODULE_0__[\"insertElement\"])('li', '', '.js-menu');\n    var menuLink = Object(_insert_element__WEBPACK_IMPORTED_MODULE_0__[\"insertElement\"])('a', element.name);\n    menuLink.setAttribute('class', 'nav-link');\n    menuLink.setAttribute('href', element.url);\n    menuItem.setAttribute('class', 'nav-item');\n    menuItem.appendChild(menuLink);\n  });\n  return menuItems;\n}\n\n//# sourceURL=webpack:///./src/display-menu.js?");

/***/ }),

/***/ "./src/display-upload.js":
/*!*******************************!*\
  !*** ./src/display-upload.js ***!
  \*******************************/
/*! exports provided: displayUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayUpload\", function() { return displayUpload; });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _insert_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insert-element */ \"./src/insert-element.js\");\n/* harmony import */ var _upload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-image */ \"./src/upload-image.js\");\n\n\n\n/**\n * Display the upload button and the title and add an onclick() event to the button.\n *\n * @description Display the upload button and the title and add an onclick() event to the button.\n * @example displayUpload(5);\n * @param {number} max The maximum number of images accepted in the gallery.\n */\n\nfunction displayUpload(max) {\n  var app = Object(_app__WEBPACK_IMPORTED_MODULE_0__[\"getApp\"])();\n  var uploadContainer = document.querySelector('.js-upload-container');\n  var uploadButton = Object(_insert_element__WEBPACK_IMPORTED_MODULE_1__[\"insertElement\"])('a', '', '.js-upload-container');\n  var uploadButtonText = document.createTextNode('upload');\n  var form = Object(_insert_element__WEBPACK_IMPORTED_MODULE_1__[\"insertElement\"])('form');\n  var inputField = Object(_insert_element__WEBPACK_IMPORTED_MODULE_1__[\"insertElement\"])('input');\n  var submitField = Object(_insert_element__WEBPACK_IMPORTED_MODULE_1__[\"insertElement\"])('input');\n  uploadButton.role = 'button';\n  uploadButton.className = 'btn--success';\n  form.action = '';\n  form.method = 'GET';\n  inputField.type = 'url';\n  inputField.required = 'required';\n  inputField.name = 'url';\n  submitField.type = 'submit';\n  submitField.value = 'envoyer';\n\n  if (app.images.length > max) {\n    uploadButton.className = 'btn--warning';\n    uploadButtonText = document.createTextNode('supprimer une image');\n  }\n\n  uploadButton.appendChild(uploadButtonText);\n  form.appendChild(inputField);\n  form.appendChild(submitField);\n  uploadContainer.appendChild(form);\n  Object(_upload_image__WEBPACK_IMPORTED_MODULE_2__[\"onFileChange\"])(uploadButton);\n  Object(_upload_image__WEBPACK_IMPORTED_MODULE_2__[\"onFormSubmit\"])(form);\n}\n\n//# sourceURL=webpack:///./src/display-upload.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-menu */ \"./src/display-menu.js\");\n/* harmony import */ var _display_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-footer */ \"./src/display-footer.js\");\n/* harmony import */ var _display_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-upload */ \"./src/display-upload.js\");\n/* harmony import */ var _display_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-gallery */ \"./src/display-gallery.js\");\n\n\n\n\nObject(_display_menu__WEBPACK_IMPORTED_MODULE_0__[\"displayMenu\"])();\nObject(_display_footer__WEBPACK_IMPORTED_MODULE_1__[\"displayFooter\"])();\nObject(_display_upload__WEBPACK_IMPORTED_MODULE_2__[\"displayUpload\"])(10);\nObject(_display_gallery__WEBPACK_IMPORTED_MODULE_3__[\"displayImages\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/insert-element.js":
/*!*******************************!*\
  !*** ./src/insert-element.js ***!
  \*******************************/
/*! exports provided: insertElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertElement\", function() { return insertElement; });\n/**\n * Create a new HTMLElement and append it in the given parent.\n *\n * @description This function creates an HTMLElement (a tag).\n * @example insertElement(\"a\", \"Click me!\", \".a-container\");\n * @param {string} tag The HTML tag to create.\n * @param {string} text The text that will be displayed inside the tag.\n * @param {string|HTMLElement} parent The parent of the created tag. The tag will be inserted into this parent.\n * @returns {HTMLElement} The HTMLElement created by the script.\n */\nfunction insertElement(tag, text, parent) {\n  if (!tag || typeof tag !== 'string') {\n    throw new Error(\"insertElement requires a tag\\n\".concat(tag, \" is not allowed as a tag parameter.\"));\n  }\n\n  var createdTag = document.createElement(tag);\n\n  if (typeof text !== 'undefined') {\n    createdTag.appendChild(document.createTextNode(text));\n  }\n\n  if (typeof parent !== 'undefined') {\n    if (!(parent instanceof HTMLElement)) {\n      var selectedParent = document.querySelector(parent);\n      selectedParent.appendChild(createdTag);\n      return createdTag;\n    }\n\n    parent.appendChild(createdTag);\n  }\n\n  return createdTag;\n}\n\n//# sourceURL=webpack:///./src/insert-element.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pushImage\", function() { return pushImage; });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n/**\n * Push images in the image table.\n *\n * @description Push images in the image table.\n * @example pushImage('https://www.site.com/image.png', []);\n * @param {string} url The (relative or absolute) path to the file.\n * @param {Array} colors The colors of the image.\n */\n\nfunction pushImage(url, colors) {\n  var app = Object(_app__WEBPACK_IMPORTED_MODULE_0__[\"getApp\"])();\n  console.log(colors);\n  app.images.push({\n    url: url,\n    colors: colors\n  });\n  localStorage.setItem(app.namespace, JSON.stringify(app));\n}\n\n//# sourceURL=webpack:///./src/push-image.js?");

/***/ }),

/***/ "./src/remove-inside.js":
/*!******************************!*\
  !*** ./src/remove-inside.js ***!
  \******************************/
/*! exports provided: removeInside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeInside\", function() { return removeInside; });\n/**\n * Remove anything that is inside an HTMLElement.\n *\n * @description Remove everything that is inside an HTMLElement.\n * @example removeInside(\".css-selector\");\n * @param {string} selector The selector to target. Everuthing in this element will be removed form the DOM.\n */\nfunction removeInside(selector) {\n  document.querySelector(selector).innerHTML = '';\n}\n\n//# sourceURL=webpack:///./src/remove-inside.js?");

/***/ }),

/***/ "./src/upload-image.js":
/*!*****************************!*\
  !*** ./src/upload-image.js ***!
  \*****************************/
/*! exports provided: onFileChange, onFormSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onFileChange\", function() { return onFileChange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onFormSubmit\", function() { return onFormSubmit; });\n/* harmony import */ var _push_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./push-image */ \"./src/push-image.js\");\n/* harmony import */ var _display_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-gallery */ \"./src/display-gallery.js\");\n/* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-service */ \"./src/web-service.js\");\n\n\n\n/**\n * On file change, send the file to the web service.\n *\n * @description On file change, send the file to the web service.\n * @example onFileChange(button);\n * @param {HTMLElement} button The button that is clicked by the user.\n */\n\nfunction onFileChange(button) {\n  var file = document.querySelector('#js-file');\n  var clickedButton = button;\n\n  clickedButton.onclick = function () {\n    return file.click();\n  };\n\n  file.addEventListener('change', function (event) {\n    var formData = new FormData();\n    formData.append('image', file.files[0]);\n    Object(_web_service__WEBPACK_IMPORTED_MODULE_2__[\"queryWebService\"])('POST', null, formData, function (response) {\n      var reader = new FileReader();\n\n      reader.onloadend = function (success) {\n        var result = event.target.result;\n        Object(_push_image__WEBPACK_IMPORTED_MODULE_0__[\"pushImage\"])(result, JSON.parse(response).result.colors.image_colors);\n        Object(_display_gallery__WEBPACK_IMPORTED_MODULE_1__[\"displayImages\"])();\n        document.querySelector('div.js-gallery a.image-item:last-child').click();\n        return success;\n      };\n\n      reader.readAsDataURL(file.files[0]);\n    });\n    return event;\n  });\n}\n/**\n * On url input, send the file to the web service.\n *\n * @description On url input, send the file to the web service.\n * @example onFormSubmit(form);\n * @param {HTMLFormElement} form The form that is submitted.\n */\n\nfunction onFormSubmit(form) {\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    Object(_web_service__WEBPACK_IMPORTED_MODULE_2__[\"queryWebService\"])('GET', form.elements.url.value, null, function (response, url) {\n      Object(_push_image__WEBPACK_IMPORTED_MODULE_0__[\"pushImage\"])(url, JSON.parse(response).result.colors.image_colors);\n      Object(_display_gallery__WEBPACK_IMPORTED_MODULE_1__[\"displayImages\"])();\n      document.querySelector('div.js-gallery a.image-item:last-child').click();\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/upload-image.js?");

/***/ }),

/***/ "./src/web-service.js":
/*!****************************!*\
  !*** ./src/web-service.js ***!
  \****************************/
/*! exports provided: queryWebService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryWebService\", function() { return queryWebService; });\n/**\n * Connect to the web service to get images colors.\n *\n * @description Connect to the web service to get images colors.\n * @example queryWebService('GET', url, null, (response, url) => {console.log(response);});\n * @param {string} method The method used to connect to the web service, GET or POST.\n * @param {string} query The complete query to append at the end of the url\n * e.g \"&Yay\".\n * @param {FormData} body The value that will go in the xhr.send() statement.\n * @param {*} success Something that will be executed when the request is loaded.\n */\nfunction queryWebService(method, query, body, success) {\n  var xhr = new XMLHttpRequest();\n\n  if (query === null) {\n    xhr.open(method, 'https://api.imagga.com/v2/colors?extract_object_colors=0');\n  } else {\n    xhr.open(method, \"https://api.imagga.com/v2/colors?extract_object_colors=0&image_url=\".concat(query));\n  }\n\n  xhr.setRequestHeader('authorization', 'Basic YWNjX2VhMWFiMDhmM2JjMmI0NjpmNjU1NTRjMjlkZmU2MjBkZjZkNzlhOWI4NTZjOGRjYQ==');\n\n  xhr.onloadend = function (event) {\n    if (xhr.status === 200) {\n      success(xhr.response, query);\n    }\n  };\n\n  xhr.send(body);\n}\n\n//# sourceURL=webpack:///./src/web-service.js?");

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