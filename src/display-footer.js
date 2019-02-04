import { insertElement } from "./insert-element";

/**
 * Display a list containing the extensions of files accepted.
 * 
 * @description //TODO
 * @example //TODO
 */
export function displayFooter() {
    var validExtensions = [
        ".jpg",
        ".jpeg",
        ".png",
        ".gif"
    ];
    for (var i = 0; i < validExtensions.length; i++) {
        insertElement("li", validExtensions[i], "ul.js-extension-list");
    }
}