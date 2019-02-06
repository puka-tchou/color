import { getApp } from './app';
import { insertElement } from './insert-element';
import { onFileChange, onFormSubmit } from './upload-image';

/**
 * Display the upload button and the title and add an onclick() event to the button.
 *
 * @description Display the upload button and the title and add an onclick() event to the button.
 * @example displayUpload(5);
 * @param {number} max The maximum number of images accepted in the gallery.
 */
export function displayUpload(max) {
  const app = getApp();
  const uploadContainer = document.querySelector('.js-upload-container');
  const uploadButton = insertElement('a', '', '.js-upload-container');
  let uploadButtonText = document.createTextNode('upload');
  const form = insertElement('form');
  const inputField = insertElement('input');
  const submitField = insertElement('input');
  uploadButton.role = 'button';
  uploadButton.className = 'btn--success';
  form.action = '';
  form.method = 'GET';
  inputField.type = 'url';
  inputField.required = 'required';
  inputField.name = 'url';
  submitField.type = 'submit';
  submitField.value = 'envoyer';
  if (app.images.length > max) {
    uploadButton.className = 'btn--warning';
    uploadButtonText = document.createTextNode('supprimer une image');
  }
  uploadButton.appendChild(uploadButtonText);
  form.appendChild(inputField);
  form.appendChild(submitField);
  uploadContainer.appendChild(form);
  onFileChange(uploadButton);
  onFormSubmit(form);
}
