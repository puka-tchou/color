/**
 * Remove anything that is inside an HTMLElement.
 *
 * @description Remove everything that is inside an HTMLElement.
 * @example removeInside(".css-selector");
 * @param {string} selector The selector to target. Everuthing in this element will be removed form the DOM.
 */
export function removeInside(selector) {
  document.querySelector(selector).innerHTML = '';
}
