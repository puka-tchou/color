/**
 * Create a new HTMLElement and append it in the given parent.
 * 
 * @description Creates a HTML tag using the first parameter. If the second
 * parameter is set, append text inside this tag. If the third parameter is
 * set, append the created tag inside the parent.
 * @example insertElement("a", "Click me!", ".a-container");
 * @param {string} tag The HTML tag to create.
 * @param {string} text The text that will be displayed inside the tag.
 * E.g. <a>Text</a>.
 * @param {string|HTMLElement} parent The parent of the created tag. The tag will be inserted into this parent. //TODO Improve this definition
 * @returns {HTMLElement} The created HTMLElement.
 */
export function insertElement(tag, text, parent) {
    if (!tag || "string" !== typeof tag) {
        throw new Error("insertElement requires a tag\n" + tag + " is not allowed as a tag parameter");
    }
    tag = document.createElement(tag);
    if ("undefined" !== typeof text) {
        tag.appendChild(document.createTextNode(text));
    }
    if ("undefined" !== typeof parent) {
        // if (parent instanceof HTMLElement) {
        //     parent = document.querySelector(parent);
        // }
        if (!(parent instanceof HTMLElement)) {
            parent = document.querySelector(parent);
        }
        parent.appendChild(tag);
    }
    return tag;
}