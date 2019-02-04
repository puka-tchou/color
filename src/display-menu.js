import {insertElement} from "./insert-element";

/**
 * @type {Object}
 */
var menuItems = [{
    name: "accueil",
    url: "index.html"
},
{
    name: "galerie",
    url: "gallery.html"
},
{
    name: "github",
    url: "#"
},
{
    name: "documentation",
    url: "/docs/index.html"
}
];
/**
 * Display the menu links.
 * 
 * @description Display the menu links.
 * @example displayMenu(menuItems);
 * @param {Array} menu The array containing menu objects.
 */
export function displayMenu() {
    for (var key in menuItems) {
        var menuItem = insertElement("li", "", ".js-menu");
        var menuLink = insertElement("a", menuItems[key].name);
        menuLink.setAttribute("class", "nav-link");
        menuLink.setAttribute("href", menuItems[key].url);
        menuItem.setAttribute("class", "nav-item");
        menuItem.appendChild(menuLink);
    }
    return true;
}