import { getApp } from "./app";
import { insertElement } from "./insert-element";

const app = getApp();
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
/**
 * Removes the image from the preview zone when the user clicks it again.
 *
 * @description //TODO
 * @example //TODO
 */
function removePreview() {
  const preview = document.querySelector(".clicked");
  if (preview) {
    preview.className = "js-image-preview item-center";
    preview.src = "../assets/cat1.gif";
    removeInside(".js-color-list");
  }
}

function displayColor(image) {
  removeInside(".js-color-list");
  for (const color of image.colors) {
    insertElement("li", color.html_code, ".js-color-list");
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
  const preview = document.querySelector(".js-image-preview");
  const url = event.target.getAttribute("dataUrl");
  preview.src = url;
  preview.className = "clicked js-image-preview item-center";
  preview.addEventListener("click", removePreview);
  const image = app.images.find(function(element) {
    return url === element.url;
  });
  displayColor(image);
}
/**
 * Display the images in a gallery and add eventListeners.
 *
 * @description //TODO
 * @example //TODO
 */
export function displayImages() {
  const gallery = document.querySelector(".js-gallery");
  gallery.innerHTML = "";
  for (const image of app.images) {
    const galleryItem = insertElement("a", "", ".js-gallery");
    const deleteBtn = insertElement("button", "x", galleryItem);
    deleteBtn.className = "btn--danger";
    galleryItem.className = "image-item box-shadow transition";
    galleryItem.setAttribute("dataUrl", image.url);
    galleryItem.style = `background-image: url(${image.url})`;
    galleryItem.addEventListener("click", previewImage);
    deleteImage(deleteBtn, image);
  }
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
  const preview = document.querySelector(".js-image-preview");
  button.addEventListener("click", function(event) {
    event.stopPropagation();
    if (window.confirm("Voulez-vraiment supprimer l'image ?")) {
      const result = app.images.find(function(item) {
        return item.url === image.url;
      });
      const key = app.images.indexOf(result);
      app.images.splice(key, 1);
      localStorage.setItem(app.namespace, JSON.stringify(app));
      const gallery = document.querySelector(".js-gallery");
      gallery.innerHTML = "";
      displayImages();
      if (preview.getAttribute("src") === image.url) {
        removePreview();
        removeInside(".js-color-list");
      }
    }
  });
}
