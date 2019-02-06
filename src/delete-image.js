import { getApp } from './app';
import { displayImages, removePreview } from './display-gallery';
import { removeInside } from './remove-inside';

const app = getApp();
/**
 * Delete an image from the gallery when the users cliks on the button.
 *
 * @description Delete an image from the gallery when the users cliks on the button.
 * @example deleteImage(button, element);
 * @param {string} button The button to delete an image.
 * @param {Array} image The list of images.
 */
export function deleteImage(button, image) {
  const preview = document.querySelector('.js-image-preview');
  button.addEventListener('click', event => {
    event.stopPropagation();
    if (window.confirm("Voulez-vraiment supprimer l'image ?")) {
      const result = app.images.find(item => item.url === image.url);
      const key = app.images.indexOf(result);
      app.images.splice(key, 1);
      localStorage.setItem(app.namespace, JSON.stringify(app));
      const gallery = document.querySelector('.js-gallery');
      gallery.innerHTML = '';
      displayImages();
      if (preview.getAttribute('src') === image.url) {
        removePreview();
        removeInside('.js-color-list');
      }
    }
  });
}
