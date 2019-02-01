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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// /**\n//  * Self-executed anonymous function\n//  */\n// \"use strict\";\n// (function () {\n//     var app = {\n//         namespace: \"color_app\",\n//         images: JSON.parse(localStorage.getItem(\"color_app\")).images\n//     };\n//     if (!app.images) {\n//         app.images = [];\n//     }\n//     var validExtensions = [\n//         \".jpg\",\n//         \".jpeg\",\n//         \".png\",\n//         \".gif\"\n//     ];\n//     var menuItems = [{\n//         name: \"accueil\",\n//         url: \"index.html\"\n//     },\n//     {\n//         name: \"galerie\",\n//         url: \"gallery.html\"\n//     },\n//     {\n//         name: \"github\",\n//         url: \"#\"\n//     },\n//     {\n//         name: \"documentation\",\n//         url: \"/docs/index.html\"\n//     }\n//     ];\n//     /**\n//      * Create a new HTMLElement and append it in the given parent.\n//      * \n//      * @description Creates a HTML tag using the first parameter. If the second\n//      * parameter is set, append text inside this tag. If the third parameter is\n//      * set, append the created tag inside the parent.\n//      * @example insertElement(\"a\", \"Click me!\", \".a-container\");\n//      * @param {string} tag The HTML tag to create.\n//      * @param {string} text The text that will be displayed inside the tag.\n//      * E.g. <a>Text</a>.\n//      * @param {string} parent The parent of the created tag. The tag will be\n//      * inserted into this parent.\n//      * @returns {HTMLElement} The created HTMLElement.\n//      */\n//     function insertElement(tag, text, parent) {\n//         if (!tag || \"string\" !== typeof tag) {\n//             throw new Error(\"insertElement requires a tag\\n\" + tag +\n//                 \" is not allowed as a tag parameter\");\n//         }\n//         tag = document.createElement(tag);\n//         if (\"undefined\" !== typeof text) {\n//             tag.appendChild(document.createTextNode(text));\n//         }\n//         if (\"undefined\" !== typeof parent) {\n//             parent = document.querySelector(parent);\n//             parent.appendChild(tag);\n//         }\n//         return tag;\n//     }\n//     /**\n//      * Display the menu links.\n//      * \n//      * @description Display the menu links.\n//      * @example displayMenu(menuItems);\n//      * @param {Array} menu The array containing menu objects.\n//      */\n//     function displayMenu() {\n//         for (var key in menuItems) {\n//             var menuItem = insertElement(\"li\", \"\", \".js-menu\");\n//             var menuLink = insertElement(\"a\", menuItems[key].name);\n//             menuLink.setAttribute(\"class\", \"nav-link\");\n//             menuLink.setAttribute(\"href\", menuItems[key].url);\n//             menuItem.setAttribute(\"class\", \"nav-item\");\n//             menuItem.appendChild(menuLink);\n//         }\n//         return true;\n//     }\n//     /**\n//      * Push images in the image table.\n//      * \n//      * @description //TODO\n//      * @example //TODO\n//      * @param {string} url The (relative or absolute) path to the file.\n//      * @param {Object} colors The colors of the image.\n//      */\n//     function pushImage(url, colors) {\n//         app.images.push({\n//             url: url,\n//             colors: colors\n//         });\n//         localStorage.setItem(app.namespace, JSON.stringify(app));\n//     }\n//     /**\n//      * Connect to the web service to get images colors.\n//      * \n//      * @description //TODO\n//      * @example //TODO\n//      * @param {string} method The used to connect to the web service.\n//      * @param {string} query The complete query to append at the end of the url\n//      * e.g \"&Yay\".\n//      * @param {FormData} body The value that will go in the xhr.send() statement.\n//      * @param {*} success Something that will be executed when the request is loaded.\n//      */\n//     function queryWebService(method, query, body, success) {\n//         var xhr = new XMLHttpRequest();\n//         if (null === query) {\n//             xhr.open(\n//                 method,\n//                 \"https://api.imagga.com/v2/colors?extract_object_colors=0\"\n//             );\n//         } else {\n//             xhr.open(\n//                 method,\n//                 \"https://api.imagga.com/v2/colors?extract_object_colors=0&image_url=\" +\n//                 query\n//             );\n//         }\n//         xhr.setRequestHeader(\n//             \"authorization\",\n//             \"Basic YWNjX2VhMWFiMDhmM2JjMmI0NjpmNjU1NTRjMjlkZmU2MjBkZjZkNzlhOWI4NTZjOGRjYQ==\"\n//         );\n//         xhr.onload = function (event) {\n//             if (200 === this.status) {\n//                 success(this, query);\n//             }\n//         };\n//         xhr.send(body);\n//     }\n//     /**\n//      * On file change, send the file to the web service.\n//      * \n//      * @description //TODO\n//      * @example //TODO\n//      * @param {HTMLElement} button The button that is clicked by the user.\n//      */\n//     function onFileChange(button) {\n//         var file = document.querySelector(\"#js-file\");\n//         button.onclick = function () {\n//             file.click();\n//         };\n//         file.addEventListener(\n//             \"change\",\n//             function (event) {\n//                 var formData = new FormData;\n//                 formData.append(\"image\", file.files[0]);\n//                 queryWebService(\n//                     \"POST\",\n//                     null,\n//                     formData,\n//                     function (xhr) {\n//                         var reader = new FileReader();\n//                         reader.onloadend = function (event) {\n//                             var file = event.target.result;\n//                             pushImage(file, JSON.parse(xhr.response).result.colors.image_colors);\n//                             displayImages();\n//                             document.querySelector(\"div.js-gallery a.image-item:last-child\").click();\n//                         };\n//                         reader.readAsDataURL(file.files[0]);\n//                     }\n//                 );\n//             });\n//     }\n//     /**\n//      * On url input, send the file to the web service.\n//      * \n//      * @description //TODO\n//      * @example //TODO\n//      * @param {HTMLFormElement} form The form that is submitted.\n//      */\n//     function onFormSubmit(form) {\n//         form.addEventListener(\"submit\", function (event) {\n//             event.preventDefault();\n//             queryWebService(\n//                 \"GET\",\n//                 form.elements.url.value,\n//                 null,\n//                 function (url, xhr) {\n//                     pushImage(url, JSON.parse(xhr.response).result.colors.image_colors);\n//                     displayImages();\n//                     document.querySelector(\"div.js-gallery a.image-item:last-child\").click();\n//                 });\n//         });\n//     }\n//     /**\n//      * Display the upload button and the title and add a onclick event to the\n//      * button.\n//      *\n//      * @description //TODO\n//      * @example //TODO\n//      * @param {number} max The maximum number of images accepted in the gallery.\n//      */\n//     function displayUpload(max) {\n//         var uploadContainer = document.querySelector(\".js-upload-container\");\n//         var uploadButton = insertElement(\"a\", \"\", \".js-upload-container\");\n//         var uploadButtonText = document.createTextNode(\"upload\");\n//         var form = insertElement(\"form\");\n//         var inputField = insertElement(\"input\");\n//         var submitField = insertElement(\"input\");\n//         uploadButton.role = \"button\";\n//         uploadButton.className = \"btn--success\";\n//         form.action = \"\";\n//         form.method = \"GET\";\n//         inputField.type = \"url\";\n//         inputField.required = \"required\";\n//         inputField.name = \"url\";\n//         submitField.type = \"submit\";\n//         submitField.value = \"envoyer\";\n//         if (app.images.length > max) {\n//             uploadButton.className = \"btn--warning\";\n//             uploadButtonText = document.createTextNode(\"supprimer une image\");\n//         }\n//         uploadButton.appendChild(uploadButtonText);\n//         form.appendChild(inputField);\n//         form.appendChild(submitField);\n//         uploadContainer.appendChild(form);\n//         onFileChange(uploadButton);\n//         onFormSubmit(form);\n//     }\n//     /**\n//      * Display the images in a gallery and add eventListeners.\n//      *\n//      * @description //TODO\n//      * @example //TODO\n//      */\n//     function displayImages() {\n//         var gallery = document.querySelector(\".js-gallery\");\n//         gallery.innerHTML = \"\";\n//         for (var key in app.images) {\n//             var galleryItem = insertElement(\"a\", \"\", \".js-gallery\");\n//             var deleteText = document.createTextNode(\"x\");\n//             var deleteBtn = document.createElement(\"button\");\n//             deleteBtn.appendChild(deleteText);\n//             galleryItem.appendChild(deleteBtn);\n//             galleryItem.className = \"image-item box-shadow transition\";\n//             galleryItem.setAttribute(\"dataUrl\", app.images[key].url);\n//             galleryItem.style = \"background-image: url(\" + app.images[key].url + \")\";\n//             galleryItem.addEventListener(\"click\", previewImage);\n//             deleteImage(deleteBtn, app.images[key]);\n//         }\n//     }\n//     /**\n//      * Display an image in the preview zone when the user cliks it.\n//      *\n//      * @description //TODO\n//      * @example //TODO\n//      * @param {undefined} event The event triggered.\n//      */\n//     function previewImage(event) {\n//         var preview = document.querySelector(\".js-image-preview\");\n//         var url = event.target.getAttribute(\"dataUrl\");\n//         preview.src = url;\n//         preview.className = \"clicked js-image-preview item-center\";\n//         preview.addEventListener(\"click\", removePreview);\n//         var image = app.images.find(function (element) {\n//             return url === element.url;\n//         });\n//         displayColor(image);\n//     }\n//     /**\n//      * Delete an image from the gallery when the users cliks on the button.\n//      *\n//      * @description //TODO\n//      * @example //TODO\n//      * @param {string} button The button to delete an image.\n//      * @param {Array} image The list of images.\n//      */\n//     function deleteImage(button, image) {\n//         var preview = document.querySelector(\".js-image-preview\");\n//         button.addEventListener(\"click\", function (event) {\n//             event.stopPropagation();\n//             var result = app.images.find(function (item) {\n//                 return item.url === image.url;\n//             });\n//             var key = app.images.indexOf(result);\n//             app.images.splice(key, 1);\n//             localStorage.setItem(app.namespace, JSON.stringify(app));\n//             var gallery = document.querySelector(\".js-gallery\");\n//             gallery.innerHTML = \"\";\n//             displayImages();\n//             if (preview.getAttribute(\"src\") === image.url) {\n//                 removePreview();\n//                 removeInside(\".js-color-list\");\n//             }\n//         });\n//     }\n//     /**\n//      * Removes the image from the preview zone when the user clicks it again.\n//      * \n//      * @description //TODO\n//      * @example //TODO\n//      */\n//     function removePreview() {\n//         var preview = document.querySelector(\".clicked\");\n//         if (preview) {\n//             preview.className = \"js-image-preview item-center\";\n//             preview.src = \"../assets/cat1.gif\";\n//             removeInside(\".js-color-list\");\n//         }\n//     }\n//     function displayColor(image) {\n//         removeInside(\".js-color-list\");\n//         for (var key in image.colors) {\n//             insertElement(\"li\", image.colors[key].html_code, \".js-color-list\");\n//         }\n//     }\n//     /**\n//      * Remove all that is inside a selector.\n//      * \n//      * @description //TODO\n//      * @example removeInside(\".css-selector\");\n//      * @param {string} selector The selector to target.\n//      */\n//     function removeInside(selector) {\n//         document.querySelector(selector).innerHTML = \"\";\n//     }\n//     /**\n//      * Randomly change the background on page load.\n//      *\n//      * @description //TODO\n//      * @example //TODO\n//      * @param {number} i The number of images to pick from\n//      * (i.e 5 means 6 backgrounds to pick from).\n//      */\n//     function randomBackground(i) {\n//         var imageNumber = getRandomInt(i);\n//         var backgroundPath = \"assets/background/\";\n//         var background = document.querySelector(\".background\");\n//         background.style = \"background-image:url(\" + backgroundPath + imageNumber + \".webp)\";\n//     }\n//     /**\n//      * Randomly generates an integer, between 0 and max.\n//      *\n//      * @description //TODO\n//      * @example //TODO\n//      * @param {number} max The maximum of the generated number.\n//      * @returns {number} An integer between 0 and max.\n//      */\n//     function getRandomInt(max) {\n//         return Math.floor(Math.random() * Math.floor(max));\n//     }\n//     /**\n//      * Display a list containing the extensions of files accepted.\n//      * \n//      * @description //TODO\n//      * @example //TODO\n//      */\n//     function displayTypes() {\n//         for (var i = 0; i < validExtensions.length; i++) {\n//             insertElement(\"li\", validExtensions[i], \"ul.js-extension-list\");\n//         }\n//     }\n//     displayMenu();\n//     displayUpload(10);\n//     displayImages();\n//     randomBackground(5);\n//     displayTypes();\n// }());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main.scss?");

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