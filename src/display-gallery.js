import { getApp } from './app';
import { insertElement } from './insert-element';
import { deleteImage } from './delete-image';
import { removeInside } from './remove-inside';

const app = getApp();
/**
 * Removes the image from the preview zone when the user clicks it.
 *
 * @description Removes the image from the preview zone when the user clicks it.
 * @example removePreview();
 */
export function removePreview() {
  const preview = document.querySelector('.clicked');
  if (preview) {
    preview.className = 'js-image-preview item-center';
    preview.src = '../assets/cat1.gif';
    removeInside('.js-color-list');
  }
}
/**
 * @description Display the color list of the image in the preview zone.
 * @param {Object} image The object containing the image that is clicked.
 */
function displayColor(image) {
  removeInside('.js-color-list');
  image.colors.forEach(element => {
    insertElement('li', element.html_code, '.js-color-list');
  });
}
/**
 * Display an image in the preview zone when the user cliks it.
 *
 * @description Display an image in the preview zone when the user cliks it.
 * @example target.addEventListener('click', previewImage);
 * @param {Object} event The event triggered.
 */
export function previewImage(event) {
  const preview = document.querySelector('.js-image-preview');
  const url = event.target.getAttribute('dataUrl');
  preview.src = url;
  preview.className = 'clicked js-image-preview item-center';
  preview.addEventListener('click', removePreview);
  const image = app.images.find(element => url === element.url);
  displayColor(image);
}
/**
 * Display the images in a gallery and add eventListeners.
 *
 * @description Display the images in a gallery and add eventListeners.
 * @example displayImages();
 */
export function displayImages() {
  const gallery = document.querySelector('.js-gallery');
  gallery.innerHTML = '';
  app.images.forEach(element => {
    const galleryItem = insertElement('a', '', '.js-gallery');
    const deleteBtn = insertElement('button', 'x', galleryItem);
    deleteBtn.className = 'btn--danger';
    galleryItem.className = 'image-item box-shadow transition';
    galleryItem.setAttribute('dataUrl', element.url);
    galleryItem.style = `background-image: url(${element.url})`;
    galleryItem.addEventListener('click', previewImage);
    deleteImage(deleteBtn, element);
  });
}
