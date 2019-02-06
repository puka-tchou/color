import { insertElement } from './insert-element';

/**
 * Display a list containing the extensions of files accepted.
 *
 * @description Display a list containing the files accepted in the footer.
 */
export function displayFooter() {
  const validExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  validExtensions.forEach(value => {
    insertElement('li', value, 'ul.js-extension-list');
  });
}
