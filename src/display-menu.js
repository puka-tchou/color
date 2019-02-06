import { insertElement } from './insert-element';
/**
 * @type {Object}
 */
const menuItems = [
  {
    name: 'accueil',
    url: 'index.html'
  },
  {
    name: 'galerie',
    url: 'gallery.html'
  },
  {
    name: 'github',
    url: '#'
  },
  {
    name: 'documentation',
    url: '/docs/index.html'
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
  menuItems.forEach(element => {
    const menuItem = insertElement('li', '', '.js-menu');
    const menuLink = insertElement('a', element.name);
    menuLink.setAttribute('class', 'nav-link');
    menuLink.setAttribute('href', element.url);
    menuItem.setAttribute('class', 'nav-item');
    menuItem.appendChild(menuLink);
  });
  return menuItems;
}
