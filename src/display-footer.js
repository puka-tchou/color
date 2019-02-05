import { insertElement } from "./insert-element";

/**
 * Display a list containing the extensions of files accepted.
 *
 * @description //TODO
 * @example //TODO
 */
export function displayFooter() {
  const validExtensions = [".jpg", ".jpeg", ".png", ".gif"];
  for (const element of validExtensions) {
    insertElement("li", element, "ul.js-extension-list");
  }
}
