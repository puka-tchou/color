import { pushImage } from './push-image';
import { displayImages } from './display-gallery';
import { queryWebService } from './web-service';
/**
 * On file change, send the file to the web service.
 *
 * @description //TODO
 * @example //TODO
 * @param {HTMLElement} button The button that is clicked by the user.
 */
export function onFileChange(button) {
  const file = document.querySelector('#js-file');
  const clickedButton = button;
  clickedButton.onclick = () => file.click();
  file.addEventListener('change', event => {
    const formData = new FormData();
    formData.append('image', file.files[0]);
    queryWebService('POST', null, formData, response => {
      const reader = new FileReader();
      reader.onloadend = success => {
        const result = event.target.result;
        pushImage(result, JSON.parse(response).result.colors.image_colors);
        displayImages();
        document.querySelector('div.js-gallery a.image-item:last-child').click();
        return success;
      };
      reader.readAsDataURL(file.files[0]);
    });
    return event;
  });
}
/**
 * On url input, send the file to the web service.
 *
 * @description //TODO
 * @example //TODO
 * @param {HTMLFormElement} form The form that is submitted.
 */
export function onFormSubmit(form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    queryWebService('GET', form.elements.url.value, null, (response, url) => {
      pushImage(url, JSON.parse(response).result.colors.image_colors);
      displayImages();
      document.querySelector('div.js-gallery a.image-item:last-child').click();
    });
  });
}
