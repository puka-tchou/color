import { getApp } from './app';

/**
 * Push images in the image table.
 *
 * @description Push images in the image table.
 * @example pushImage('https://www.site.com/image.png', []);
 * @param {string} url The (relative or absolute) path to the file.
 * @param {Array} colors The colors of the image.
 */
export function pushImage(url, colors) {
  const app = getApp();
  console.log(colors);
  app.images.push({
    url,
    colors
  });
  localStorage.setItem(app.namespace, JSON.stringify(app));
}
