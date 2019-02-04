import {
    getApp
} from "./app";
import {
    insertElement
} from "./insert-element";

var app = getApp();

/**
 * Display the images in a gallery and add eventListeners.
 *
 * @description //TODO
 * @example //TODO
 */
export function displayImages() {
    var gallery = document.querySelector(".js-gallery");
    gallery.innerHTML = "";
    for (var key in app.images) {
        var galleryItem = insertElement("a", "", ".js-gallery");
        var deleteText = document.createTextNode("x");
        var deleteBtn = document.createElement("button");
        deleteBtn.appendChild(deleteText);
        galleryItem.appendChild(deleteBtn);
        galleryItem.className = "image-item box-shadow transition";
        galleryItem.setAttribute("dataUrl", app.images[key].url);
        galleryItem.style = "background-image: url(" + app.images[key].url + ")";
        galleryItem.addEventListener("click", previewImage);
        deleteImage(deleteBtn, app.images[key]);
    }
}

/**
 * Display an image in the preview zone when the user cliks it.
 *
 * @description //TODO
 * @example //TODO
 * @param {undefined} event The event triggered.
 */
export function previewImage(event) {
    var preview = document.querySelector(".js-image-preview");
    var url = event.target.getAttribute("dataUrl");
    preview.src = url;
    preview.className = "clicked js-image-preview item-center";
    preview.addEventListener("click", removePreview);
    var image = app.images.find(function (element) {
        return url === element.url;
    });
    displayColor(image);
}

/**
 * Delete an image from the gallery when the users cliks on the button.
 *
 * @description //TODO
 * @example //TODO
 * @param {string} button The button to delete an image.
 * @param {Array} image The list of images.
 */
export function deleteImage(button, image) {
    var preview = document.querySelector(".js-image-preview");
    button.addEventListener("click", function (event) {
        event.stopPropagation();
        var result = app.images.find(function (item) {
            return item.url === image.url;
        });
        var key = app.images.indexOf(result);
        app.images.splice(key, 1);
        localStorage.setItem(app.namespace, JSON.stringify(app));
        var gallery = document.querySelector(".js-gallery");
        gallery.innerHTML = "";
        displayImages();
        if (preview.getAttribute("src") === image.url) {
            removePreview();
            removeInside(".js-color-list");
        }
    });
}

/**
 * Removes the image from the preview zone when the user clicks it again.
 * 
 * @description //TODO
 * @example //TODO
 */
function removePreview() {
    var preview = document.querySelector(".clicked");
    if (preview) {
        preview.className = "js-image-preview item-center";
        preview.src = "../assets/cat1.gif";
        removeInside(".js-color-list");
    }
}

function displayColor(image) {
    removeInside(".js-color-list");
    for (var key in image.colors) {
        insertElement("li", image.colors[key].html_code, ".js-color-list");
    }
}

/**
 * Remove all that is inside a selector.
 * 
 * @description //TODO
 * @example removeInside(".css-selector");
 * @param {string} selector The selector to target.
 */
function removeInside(selector) {
    document.querySelector(selector).innerHTML = "";
}